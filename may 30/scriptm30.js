
//        REDUCE REDUCE,  reduce method ;   by default value of accumulator is zero (0)

const num = [123, 23, 432];  
const value = num.reduce( myfun); 

function myfun(total, num) { 
    return total + num; 
}

console.log(value);

//   for-in  sum of elements of array: 
let sum =0; 
for (let ele of num) { 
    sum += ele; 
}
console.log(sum);

//  for-of loop  for adding element of array: 
const ok = [100, 230, 430];  
let add = 0; 

for (let ele in ok) { 
    add += ok[ele]; 
}
console.log(add);


//  test 2 may so not teaching new  ,,   class test ; 

let fruit = ['apple', 'papaya', 'kiwi', 'mango', 'grape'];  // 1
console.log(fruit[2]); 

let aru = [1, 'pop', 'push', 'shift', 'unshift']; 
aru.push(345); 
console.log(aru);   // 2

aru.shift(); 
console.log(aru);   // 3

console.log(aru.includes(345));   // 4. 

console.log(`\n`);

for (let i=0; i<fruit.length; i++) { 
    console.log(fruit[i]);
}
//                                 5,
console.log(`\n`);
let person = { 
    name: 'john lincon', 
    profession : "teacher" , 
    age: 34,
}

console.log(person.name);

//   add new key: "value"; 
person.city = "bhopal"; 

person["district"] = "bhopal"; 

console.log(person);


//  MAY 31    MAY 31.  

// in the mem allocation phase all var are  undef  before executing any value : hoisting.  


let f = "8"; 
console.log(+f);   // direct way to convert string to number. 

// array,  objct,  func store in heap  so   if   let arr1, arr2  same ele  but 

//   types of error in js :::::  syntax,  reference,  type error.  











