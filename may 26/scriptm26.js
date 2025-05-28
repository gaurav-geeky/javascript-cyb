//  dom test 

//   1.  take 2 inp, 4 button  click any button operation will perform. 

let button1 = document.getElementById('btn1'); 
// let button2 = document.getElementById('btn2'); 
// let button3 = document.getElementById('btn3'); 
// let button4 = document.getElementById('btn4'); 


let input1 = document.getElementById('ip1').value; 
let input2 = document.getElementById('ip2').value; 


button1.addEventListener('click', run); 

function run(add) { 
    let head1 = document.getElementById('head1'); 
    
    let a = (parseInt(prompt("enter a: "))); 
    let b = (parseInt(prompt("enter b: ")));  
    add = a+b; 
    input1 = add; 

    head1.innerHTML = add; 
}

// button2.addEventListener('click', run()); 
// button3.addEventListener('click', run()); 
// button4.addEventListener('click', run()); 


//   2. replace all google to cybrom 

let line = "welcome to the google, Bhopal, we are google student we learning js in google. " 

console.log(`change: `, line);  
let replaceWord = document.getElementById('replace');  

replaceWord.addEventListener('click', ChangeReplace)
function ChangeReplace () { 
    let newLine = line.replaceAll('google', 'cybrom');  
    console.log(newLine);
}
// Change(); 


//  Q ..3. click to chg bg color;  

    let body = document.getElementById('body');  

let Green = document.getElementById('green'); 
Green.addEventListener('click', change1); 
function change1 () { 
    body.style.cssText = "background-color: green;"
}

let Black = document.getElementById('black'); 
Black.addEventListener('click', change2); 
function change2 () { 
    body.style.cssText = "background-color: black;"
}

let Orange = document.getElementById('orange'); 
Orange.addEventListener('click', change3); 
function change3 () { 
    let body = document.getElementById('body');  
    body.style.cssText = "background-color: orange;"
}


// function clickHandle(color) { 
//     return function () { 
//         document.body.style.backgroundColor = `${color}` 
//     }
// }

// document.getElementById('green').onclick = clickHandle('green'); 
// document.getElementById('black').onclick = clickHandle('black'); 
// document.getElementById('orange').onclick = clickHandle('orange'); 













