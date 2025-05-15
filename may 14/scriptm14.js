// questions    15 may.. 

let person = { 
    name: "alice", 
    age: 25, 
    city: "delhi"
}; 
console.log(`object person name: ${person.name} and his age is ${person.age} years old.`);


//          add key: value. //  whenever do this   use  .value = change 

let user = { 
    username: "hellok", 
    email: "hello@gmail.com" 
}; 
user.country = "India";  
console.log(user);

//  change.  

let account = { 
    id: 1, 
    status: "active"
};  
account.status = "inactive"; 
console.log(account);


//    check. if  element  exists or include or not   method 1

profile = { 
    name: "hello", 
    age: 30
}; 
let include = "yo" in profile;  //   key include or not ***   @@@   ###   **** 

console.log(include);
console.log('name' in profile); 



//**** *    check  if key include  method 2
 const my = { a: 1, b: 2, c: 3 };
    const vv = Object.keys(my);

    console.log(vv.includes('a')); // Output: true
    console.log( vv.includes('d')); 

    console.log(Object.keys(my).includes('ddd')); 


//  ***

//      add  element to end of   array.  
let color = ["red", "green"]; 

color.push("blue"); 
console.log(color);

//      remove last element of array and   store in var. 
let fruit = ["apple", "banana", "orange"];  

let con = fruit[2]; 
console.log(con);

fruit.pop(); 
console.log(fruit);


//   remove 1st elemnt of  array.  
let tasks = ["wake up", "brush", "eat"]; 

tasks.shift();  
console.log(tasks);


//      add "start" to begining of array;  
let steps = ["step1", "step2"]; 

steps.unshift("start"); 
console.log(steps);


//      create sub-array  from ind  1 - 3 .

let nums = [10, 20 , 30, 40, 50]; 

let sub = nums.slice(1, 3); 
console.log(sub);


//  remove  2 element   start from ind 1;  

let letters = ["a", "b", "c" , "d"]; 

let remove = letters.splice(0, 2);  //      splice remove that part from original array. 
//      means it changes original array. 
console.log(letters);


//      insert   x  , y  at index 2 __  without deleting anything

let arr = [1, 2, 3, 4]; 
arr.splice(2, 0, "x", "y")  //   1st ind  from where,   2nd ind  how much to remove,    ele 1,  ele 2,  ele 3 to add.

console.log(arr);















































