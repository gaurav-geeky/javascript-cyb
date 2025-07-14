//  local storage . ... 

setData = () => { 
    localStorage.setItem("colors", "multi");    
    localStorage.setItem("sp color", "white");  
    localStorage.setItem("mix", "green & red")  

    localStorage.setItem("toffee", "coconut")   

    // location.reload() 
}

getData = () => { 
    let h1 = document.querySelector("#hd1"); 
    let h4 = document.querySelector("#hd4"); 

    h1.innerHTML = localStorage.getItem("toffee"); 
    h4.innerHTML = localStorage.getItem("colors"); 
}

remove = () => { 
    localStorage.removeItem("sp color")
}

clear = () => { 
    localStorage.clear(); 
}   


//  convert object to string using  JSON ... 

let school = { 
    course : "all sub", 
    class : "till 12th", 
    infra : "wooden", 
    drink : "water" 
}

sch = () => { 
    localStorage.setItem("json", JSON.stringify(school)); 
}

console.log(JSON.parse(localStorage.getItem("json[1]")));











