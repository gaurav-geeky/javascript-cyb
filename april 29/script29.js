//  ARRAY 

const fruits = ["mango", "stawbery", "grapes", "kiwi"];  
// splice change original array   it is used to remove and add also 

// starting index,  element to remove,  elements to add. 
fruits.splice(0, 2, "red", "blue", "green" );  

console.log(fruits);

//  reverse    array.method   
fruits.reverse(); 
console.log(fruits);

// includes   check if element is available in array or not 
console.log(fruits.includes(44));   // false 

// index of 
console.log(fruits.indexOf("red")); // 4        // if 0  then -1 

// array covert to string   2 methods   tostring   and  join 
let x = fruits.toString(); 
console.log(x, typeof x);       // kiwi,grapes,green,blue,red   string

x = fruits.join(); 
console.log(x, typeof x);       // kiwi,grapes,green,blue,red   string

//  string to array 
x = x.split(","); 
console.log(x, typeof x);   //   ['kiwi', 'grapes', 'green', 'blue', 'red'] 'object' 

//   we can also use chaining to add methods and methods 

console.log(fruits.slice(1, 4).reverse().toString().charAt(0));  // b 
//  "blue,green,grapes"     string so first   is  b 
//  string indexing is same as ARRAY SO    charAt(0)  0 is index // IMP // IMP 

let y = Array.isArray(fruits); 
console.log(y);     // true 

        // concatenation 
const num1 = [1, 2, 3, 4, 5]; 
const num2 = [10, 20, 30, 40, 50]; 

    //  concatenation 
    const number = num1.concat(num2); 
    console.log(number);        // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50] 

//  ES6 feature   spread operator ,                    backtick (` `)
// spread operator .  
const number2 = [...num1, ...num2]   //[1, 2, 3, 4, 5] when only ...num1
console.log(number2);        // [1, 2, 3, 4, 5, 10, 20, 30, 40, 50] 

// question given array and make new //

const arr = [1, 2, 3, 4, 5]; 
                    //  arr  push add    pop  remove  last   
                    //  arr   unshift add    shift remove   first
arr.push(6) 
arr.unshift(0)
console.log(arr);

arr.reverse(); 
console.log(arr);

//      question  2 array  join then  each element should be once 
const arr1 = [1, 2, 3, 4, 5]; 
const arr2 = [5, 6, 7, 8, 9 , 10]; 

arr2.shift(5) 

console.log(arr2);
// const new1 = [...arr1, ...arr2]
console.log([...arr1,...arr2]);

//      splice(5, 1) remove  1 element from  5th position 
//  splice change original array   ********** IMP **** IMP **

/////////////  OBJECT LITERALS      OBJECT LITERALS     //// 
//      NEW   NEW  NEW  //

const person = { 
    name: "john dow",
    age: 24, 
    iseligible: true, 
    address: { 
        street: 13, 
        state: "bhopal", 
        country: "india", 
    },
    hobbies: ["dance", "sports"], 
}; 

//    Object.property //










