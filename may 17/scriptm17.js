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


// now, func expression :  nothing just store function in a varibale and no need to give identifier.. 
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



//  *********  may 19    test  ********    may 19  questions       **********  //  

//  Q 1.  wap  to find   no is odd or even 
function OddEven (n) { 
    if (n%2 == 0) { 
        console.log(`${n} is even`);
    } 
    else { 
        console.log(`${n} is odd:`);
    }
};  
let x = prompt("enter no: "); 
OddEven(x); 

//      Q 2. wap to only 1 key of object. 
ob = {
    name: "ashu", 
    age: 40, 
    city: "bhopal", 
    country: "india", 
    continent: "asia", 
}
// console.log(ob.name);
// console.log(ob);

console.log(`1st key of object: `, Object.keys(ob)[0]);   //  for first 1st element.  
console.log(`1st key of object: `, Object.keys(ob).slice(0, 3));   // to print keys in range. from a ___ b

//          Q 3. wap to print all key of an object 
console.log(`print all keys: `, Object.keys(ob));

//          Q 4.   wap to print sum of 10 element of ARRAY  without argument and return; 

function sum () { 
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
    let sum = 0; 
    for (let i=0; i<10; i++) { 
        sum = sum + arr[i]; 
    } 
    console.log(`sum of element: ${sum}`);
}
sum(); 

//          Q 5. wap  take i/p form user ,  area of circle with argument and return; 

function circle(r) { 
    let area = (Math.PI)* r*r;  
    return area; 
}
let rad = prompt("enter radius: "); 
let area = circle(rad); 
console.log(area);

///////////  //////////////  ///////////  /////////// ///////////// //////// //////////






















































