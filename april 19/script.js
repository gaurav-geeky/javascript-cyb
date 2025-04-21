// /*                  console to print anything */

// console.log(10); 

// console.log("this is js class"); 

// console.log(2*8);  

// console.error("error");  

// console.warn("warning");  

// /*   1.                js run same in every browser */

// /*    2.    js  is dynamically typed language so  do not need to specify datatype ,,,     variables   var, let,  const 

//     3.   const is strict        need to declare , initialise at same time........   comapre to   var ,  let 
  

//     4.  value fo variable in let and var  before initialization  is  undefined  because of hoisting. 
//  ~ tillde     ( ` backtick  string can be write in it ) 

//     5.  js as primiotive  and   reference  datatype srch it
// */

// var a=10; 
 
// console.log(a); 

// var a="john"; 
// alert(a); 

/*                                         april 19  */

// array 

const number=[1,3,5,6,9]; 

console.log(number, typeof number); 

// object literal
// const person= {
// }

//      Function  
//      function declaration 

function sayHello() {
    console.log("hello"); 
}

//      function calling / invoke 

sayHello(); 

console.log(sayHello, typeof sayHello); 

//              object  refers to address to   1 change other will be change automatically  


//               but  when variable is changed  other var will not change. 


//      artithematic operators 
x = 5 + 5; 
x = 5 - 5; 
x = 5 * 5; 
console. log(x);  

//  concatenation 
x = "hello" + " " + "world"; 
console.log(x); 
x = 5; 

//      increment and decrement  

x = x+1; 
x++; 
console.log(x);  

//      equality operator 
x = 2 == "2"; 
console.log(x);  
//  it only cheks values 

x = 2 === "2";   // strict  // equality operator 
//  it checks values along with datatypes 
console.log(x); 
