// numbers and maths in javascript  / 

const Score = 200; 
console.log(Score);

const Balance = new Number(100) /////////
console.log(Balance);

console.log(Balance.toString());   //100
console.log(Balance.length); // undefined 

console.log(Balance.toFixed(2));   // till 2 after decimal      
// 100.00

const otherNum = 23.8955 
console.log(otherNum.toPrecision(3));  
// 23.9     give precise value with rounds off 
// should be used carefully 

const hundereds = 1000000 
console.log(hundered.toLocaleString()); 
// 10,00,000    value acc to US stands  hund thousands ...
 console.log(hundered.toLocaleString('en-IN'));     
// en-IN acc to indian standards

//                          maths                   //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));   // 4   __mostly round used__
console.log(Math.round(4.6));         // 5 round off

// if we want to choose smaller or bigger value itself then use 
console.log(Math.ceil(4.2));    // ceil  highest value
console.log(Math.floor(4.9));   // floor lowest value

console.log(Math.sqrt(9)); 

//  Where we will use these Math methos ???   // here 
console.log(Math.random()); 
 // value comes always b/w 0 - 1.  mostly  decimal .000


//           23  APRIL  2025  

// numbers and maths in javascript  / 

const score = 200 
console.log(score);

const balance = new Number(100) /////////
console.log(balance);

console.log(balance.toString());   //100
console.log(balance.length); // undefined 

console.log(balance.toFixed(2));   // till 2 after decimal      
// 100.00

const otNum = 23.8955 
console.log(otNum.toPrecision(3));  
// 23.9     give precise value with rounds off 
// should be used carefully 

const hundered = 1000000 
console.log(hundereds.toLocaleString()); 
// 10,00,000    value acc to US stands  hund thousands ...
 console.log(hundereds.toLocaleString('en-IN'));     
// en-IN acc to indian standards

//                          maths                   //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));   // 4   __mostly round used__
console.log(Math.round(4.6));         // 5 round off

// if we want to choose smaller or bigger value itself then use 
console.log(Math.ceil(4.2));    // ceil  highest value
console.log(Math.floor(4.9));   // floor lowest value

console.log(Math.sqrt(9)); 

//  Where we will use these Math methos ???   // here 
console.log(Math.random()); 
 // value comes always b/w 0 - 1.  mostly  decimal .000

// *******************  practice test - 1 ************88 //

var name = 'john'; 
console.log(name, typeof name);   

var age = 33 
console.log(age);

var eligible = true; 
console.log(eligible, typeof eligible);

var brain = null; 
console.log(brain , typeof brain );

var money 
console.log(money, typeof money);

console.log(10*8, "this is our mathematical operation of multiplication");

// alert(age); 

let myName = "gaurav" 
let any = myName; 
any = "fsfdfdfdf" 
console.log(any);
console.log(myName);

//      object pass reference so original will change if copy 

let user = { 
    name: "aarif", 
    age: 46, 
}

let user2 = user 

user2.name = "jo jo beats"; 
console.log(user); 
console.log(user2); 

let x = 2 === "2" 
console.log(x);


a = 5 +5; 
// a = 5 -5; 
// a = 5*5; 
console.log(a);

h = "hello " + "how are you?"
console.log(h);
































