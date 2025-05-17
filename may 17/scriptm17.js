//    may 16___ 17 functions... 

//      4 types of functions  KARYA-KRAM,  

//   in return we can store value, if we call function it will not print it. 
//  becasue value is return not printed.   

// a ***  no return   no  parameter

function display1 () { 
    console.log("hello");
}
display1(); 
//   if   let store = display1
// console.log(store);      we can not do it.. because no return in it 


// b ***   return  with no parameter. 
//  retrn    returns the value that can be store in variable.. 
function display2 () { 
    return "world"; 
}
let result = display2(); 
console.log(result);
alert(result); 
// display2();    here can not call function because it  returns only not  console so.. 



//  c  ****  parameter with no return..  
function display3(x, y) { 
    console.log(x + y);
}
display3(10, 20);  //  we dont need math sign only pass values. 


//  d ***  parameter with return... 
function display4 (x, y) {
    return x*y; 
}
let ans = display4(10, 11); 
console.log(ans);


//  ****    question take value from user and print name.. 

function name (a) { 
    console.log(a);
}
let user = prompt("enter name: "); 
name(user); 

// ****
function text () { 
    return "computer technologies"; 
}

console.log(text() );  // need paranthesis.  


// ****** fun calculate print in cosole cube of no. 

let num = parseInt(prompt("enter cube no: ")); 

function cube (b) { 
    return b*b*b; 
}
console.log(cube(num));


//  we can pass   object as well as array inside the function.  

function user1 (person) { 
    console.log(`person name is ${person.name} and age is ${person.age}`);
}
user1 ({
    name: "john wick",  
    age: 23,
});  
//  ans__ person name is john wick and age is 23_____ these all were regular functions  . 


// now, func expression :  nothing just store functino in a varibale and no need to give identifier.. 
/* 
        fun k.w.  fun Idf () {  }; 
*/

// 1,.  substraction use function expression.   

let substract = function (v, d) { 
    console.log(v - d);
}; 
substract(80, 7); 


//  2.    arrow function 

let myfunction = () => { 
    console.log("this is our ARROW FUNCTION ");
}
myfunction(); 





