// string to  no. covnersion 

var a = "6.5"; 
// a =no.  
// a = parseInt(a); 



//  number to string 
var b = 45; 
b = b.toString(); 
b = String(b); 
console.log(b, typeof b);  


var name = "john"; 

var age = 44; 
// concatenation    //  add string  number 

var text= "my name is " + name +  " "+ "I am_" + age + " years old. "

console.log(text); 

//   backticks ` `    or   template literal  or template string  

var text2 = `My name is ${name} and I am  ${age} years old. `;   
// variable should be in dollar curly bracket  ${age}  otherwise it will be string 
 
//   string will be in back ticks        {  other should be in   ${age} dollar curly brackets }

console.log(text2); 

///// 
var x = "hello world"; 
// type of 
console.log(typeof x); 

// length       --- returns the number of characters. 
var output=x.length; 
console.log(output); 

// charAt()             in js indexing starting like array  form 0 zero 
 output = x.charAt(0); 

output = x[0]; 
console.log(output); 

//  indexof  -  gives the first index of any character
output = x.indexOf("o"); 
console.log(output); 

// trim : remove the whitespace from the string
output = x.trim(); 
console.log(output); 

//      includes  :  return true or false   and  it should be in sequence. 

output = x.includes("hell"); 
console.log(output); 
/////
output = x.includes("helo"); 
console.log(output);  

//  replace method         ( 1 to be replace,  new value )
output = x.replace("hello", "bye"); 
console.log(output);  

output = x.replaceAll("hello", "bye");   //  to replace some char words all same
console.log(output);  

//  substring (starting index.  ending index) 
output = x.substring(4, 9); 
console.log(output);  

// slice do the same work as  substring does 
output = x.slice(4); 
console.log(output);  

//   uppercase  
output = x.toUpperCase(); 
console.log(output);  

//   javascript - first letter capatalise. 

var z = "javascript"; 

a = z.charAt(0); 

out = z.substring(0); 

console.log(a);  



































