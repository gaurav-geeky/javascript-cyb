var a = 2; 
console.log(a); 
function square(a) { 
    return a*a;  
}

var square2 = square(a); 
console.log(square2); 
var square3 = square(4); 
console.log(square3); 
//                   ans =  2 , 4, 16   *********************

//js var fuction kaise store hota hai aur 
// the code execute in js  in 2 phase.

//  when code run in JS   
//  1.  GLOBAL EXECUTION  context is created   in this 2 phase

//    I  memory allocaiotn (varible environment)   of var and function 
//      II  code execution ( thread execution) 
//                                               **********

//  whenever a function is called a new execution context is created 
//       it goes to line 2..  see 
//      fucntion exe context end  when  se return ..  goes to line 6 (where func is called )

//  different browser has differenet named js engine.
//  call stack : manages the  order of execution context    


//  hoisting:  in let const value will be in temporal dead zone 
//      and in var value is undefined .. 





















