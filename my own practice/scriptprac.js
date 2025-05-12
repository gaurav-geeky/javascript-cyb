// numbers and maths in javascript  / 
/*
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
*/

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


//          string topic        // 

var a = 67; 
var b = 999;  
console.log(b, typeof b);
b = b.toString(); 
console.log(b, typeof b );

var name = "john"; 
var age = 44 
var text = `my name is ${name} and age is ${age}` 
console.log(`my name is ${name} and age is ${age}`);

console.log(name.length);       // length is no of char only string ... 
console.log(age.length); 

console.log(name.charAt(2));  

console.log(name[0]);       // char th  indexing 

output = name.indexOf("n");     // indexOf  
console.log(output);

console.log(name.indexOf('h'));

var now = "      carry on jatta      "

console.log(now.trim());

console.log(now);

console.log(now.includes('att'));

console.log(now.replace('on', 'by'));

console.log(name.substring(1, 3));

console.log(name.slice(2));

console.log(name.toUpperCase());

let z = 100 
console.log(Math.sqrt(z));

//  Math works only on  numbers 

//  Array literals .. 

const fruit = ['banana', 'kiwi', 'apple', 'mango', 'yoyo']

const veg = ['tomato', 'carrot', 'raddish', 'onion', 'garlic']

console.log(fruit); 
console.log(veg[2]);

console.log(veg[2].name);   // undefined 

const color = []; 

color[0] = 'red' 
color[1] = 'blue'
color[2] = 'green' 
color[3] = 'yellow' 

console.log(color);

console.log(`my fav color is ${color[2]}`);

let ok = [1, 2, 3 ,4, 5, 6, 7, 8, 99, 111]

console.log(ok);    //  direct console to print array [, ,]
 
for (let i=0; i<=9; i++) { 
    console.log(ok[i]);
}
//              array for loop for element print only  , ,

veg.push('tori', 'parmal', 'bhindi'); 
console.log(veg, veg.length, typeof veg);

veg.pop() 
console.log(veg);


let array = [1, 2, 3, 4, 5, 7, 8, 9, 22, 33, 55];
array.splice(8, 4); // Removes 4 elements starting from index 8  //  SPLICE
                    //  and give the rest elements          //  tukda hata deta hai 
                                                        //  ORIGINAL changes
console.log(array); // Output: [1, 2, 3, 4, 5, 7, 8, 9]


console.log(array.slice(3, 5)); //  [4, 5]      // slice limit  //  SLICE 
                                            // start +   end -   tukda deta hai 
                                            //     original NO CHANGE

// for (let i=0; i<=7; i++) { 
// }
// console.log(array);

let arr11 = [] 

// for (let i=0; i<=4; i++) { 
//     arr11[i]= parseInt( prompt ("enter array values: "))
// } 

// console.log('after slice 0 to 2 index elements : ');
// for (let i=0; i<1; i++) { 
//     console.log(arr11.slice(0, 3)); 
// } 
console.log(arr11);
console.log("opopok ok ok");

arr12 = [1, 2, 3, 4, 5] 
arr13 = [5, 6, 7, 8, 9]

console.log(arr12.splice(2,3));

console.log(arr13.slice(2,2)); 


console.log(`merge of arr12 and arr13 :  ${[...arr12, ...arr13]}`);
// arr12.splice(4,1); 222

console.log(`mergerr of arr12 and arr13 :  ${[...arr12, ...arr13].slice(4,1)}`);
//  native code in reverse,  and   no 











//      MAY 6...     ********    $$$$$$$$$   %%%%%%%%%%  &&&&&&&&    ###########     @@@@@@@@@2
//              normal function.. 
function calculateAge() { 
    const birthY = parseInt(prompt ("enter birth year: ")) 
    const currentY = new Date().getFullYear(); 
    if (birthY && !isNaN(birthY)) {     //  what's this ??

        const age = currentY - birthY; 
        console.log(age);
    }
    else { 
        console.log(`please enter valud year; `);
    }
}
calculateAge(); 

const getcelsius = (f) => (f-32)* 5/9 ;  // arrow function .  
console.log(getcelsius(35));

//                  IIFE  ( normal func)  ( argu) 
(function (l, w) {

    const area = l*w; 
    console.log(area);
} )( 4, 4); 

//  **********                  circle area   iife   *** examples 

( function (r) { 
    const areaCircle = (Math.PI)*r*r ; 
    console.log(areaCircle);
} )(7);
//      153.93804002589985 


//  *********           ( ARROW FUNCTION  IMP FOR react )    arrow  cylinder area
const volCylinder = (r, h) => (Math.PI)*r*r*h ; 
console.log(volCylinder(7, 10));    //  1539.3804002589986


//                        arrow scope wala  hemisphere .. ardh gola  ***********. 
const volHem = (r) => { 
    return 2/3*(Math.PI)*r*r*r ; 
}
console.log(volHem(5)); //  261.79938779914943   
// volHem(5);

//  arrow and regular function is most imp 

const arr22 = [10, 20 , 30, 40, 50, 60]; 
let newone = arr22.slice(1,4).reverse().toString().charAt(3); 
console.log(newone);    // 3 
// ***  when ARRAY is converted to STRING  each no. becomes a character but not ,







































