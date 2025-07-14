//  calculate age. 

let div = document.querySelector('#one'); 
let head = document.querySelector('#fullage'); 

function calAge() { 
    const birthy = parseInt(prompt("enter birth yr: ")); 
    const curry = new Date().getFullYear(); 

    if (birthy && !isNaN(birthy)) { 
        const age = curry - birthy; 
        div.innerHTML = age
        div.style.cssText = "font-size: 50px; color: red; font-weight: bold; "
    } 
    else { 
        console.log(`enter valid year`);
    }
}
calAge();  


function calFullAge (birthdate) { 
    const today = new Date(); 
    const birth = new Date(birthdate); 

    let year = today.getFullYear() - birth.getFullYear(); 
    let months = today.getMonth() - birth.getMonth(); 
    let days = today.getDate() - birth.getDate();  
    
    if (months<0 || (months === 0 && days<0)) { 
        year --; 
        months +=12; 
    } 
    if (days <0) { 
        const lastday = new Date(today.getFullYear(), today.getMonth()).getDate();  
        days += lastday; 
        months--; 
    }

   
    return {
        year, months, days
    }; 
} 
const birth = '1997-12-08'; 
let age = calFullAge(birth); 

head.innerHTML = `I am ${age.year} years, ${age.months} months and ${age.days} days old`; 





////            local storage  getItem,  setItem,   removeItem,  clear,    and JSON stringify , parse.  








