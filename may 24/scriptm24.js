// DOM DOM DOM          how to change css styles 

let h1 = document.getElementById('demo');
h1.style.color = "red";
h1.style.backgroundColor = "yellow";   //   single css change..


let para = document.getElementById('para');

para.style.cssText = "color: pink;  background-color: blue; border: 2px solid red; border-radius: 20px; font-size: 40px; font-style: italic; padding: 40px;";
//                                           cssText   1 liner css change 




// let enter = document.getElementById('ip1'); 
// enter.value = "Delhi";                      // this is automatic value change NO NEED touch  


//   now, EVENTS   on clicking something   some will happen.  
//   HTML KE  onclick   click krne par function call ho 

function touch() {    
    let enter = document.getElementById('ip1'); 
    enter.value = "Delhi"; 
}
//      here no need to call function because we are calling function in html and writing that 
//     funtion in javascrippt         so it will , run.


function display() { 
    let inp = document.getElementById('ip1').value; 
    let h2 = document.getElementById('head2'); 
    h2.innerHTML = inp;  
} 

     

//    ADD EVENT LISTENER     ADD EVENT LISTENER      ADD EVENT LISTENER      ADD EVENT LISTENER 

//  addEventListener() method attaches an event Handler to the specified element. 

//  it attaches an event Handler to an element without overwriting existing Event handlers. 

// take 3 paramenter  :  event, fumction(), 

//  here onlick is  replaced by   click meaning the SAME... 

let button = document.getElementById('btn1'); 

button.addEventListener("click", function() { 
    console.log("button is clicked"); 
    h1.style.color = "green";  
})

// button.addEventListener("click", display1); 

//   it is same as 9 may , 2025, other batch. 

let button1 = document.getElementById('btn2'); 

button1.addEventListener("click", google); 
    
function google() { 
let input = document.getElementById('ip1').value; 
let head3 = document.getElementById('head3'); 

head3.innerHTML = input; 
head3.style.cssText = 'color: red; background-color: pink; font-size: 30px; '; 
}









































