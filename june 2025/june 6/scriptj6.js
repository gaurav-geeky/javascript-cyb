//             mini logics how to get pin , calendar day, month etc
//  random num. 

let num = parseInt(Math.random()*9000) + 1000; 
// code should be like that ,  that we get upper and lower limit both. 
 //  here 9000 because if 8999 + 1000 = 9999 upper value
 // this will always generate 4 digi pin

console.log(num);  // password of 4 pin. 


//  no. between + include   1 to 6 .  

let dice = parseInt (Math.random() * 6) +1 ; 

console.log(dice);

//   date topic . 

//  new k.w.  give objects, otherwise it give string format. 

let tareekh = new Date(); 
let day = tareekh.getDay(); 
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 

// console.log(`today is ${days[day]}day`);  

// console.log(Math.random());


// get month of calender.  

let mahina = tareekh.getMonth(); 

let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]; 

let year = tareekh.getFullYear(); 

console.log(`current month of yr _${year} is _ ${months[mahina]} and today is _ ${days[day]}day`);

console.log((new Date()).toLocaleString());








