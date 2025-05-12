//      any brower while loading of web page  convert document into tree like structue and element as a tree of object.      

let heading = document.getElementById('demo');   //only id name   //  imp imp  most used.. 

// heading = document.getElementsByClassName('head')  // only class name

//        wheter single elemnt so only element   
//  where elements  then  nodelist dega

// heading = document.querySelector();  // here we can give #id  .class or by tag name 

//      Node list  is like an ARRAY  but not an array .   it has it's properties.. 

//  we select each element using [  index no] 

console.log(heading);

heading.style.color = "red"; 
heading.style.backgroundColor = "yellow"; 

function change() { 
    let para = document.getElementById("para"); 
    para.style.cssText = "border: 5px solid red; color: blue:  background-color: black"; 
}


function bhopali() { 
    let input = document.getElementById("myinput").value;  
    console.log(input);
     
    heading.innerHTML = input;  
    // input.value = "indore";          .. different thing in above case 
}
//      value is name   of  ATTRIBUTE  so used it . 


function game() { 
    let h2 = document.getElementById("span1"); 
    h2.innerText = "gaurav negi"; 
    h2.style.cssText = "color: blue; background-color: pink; font-size: 35px; padding: 10px";  
}

//      jo bhi type krenge vo   milega  ..value.. 

//      so we will use value  to get something we type. 




















