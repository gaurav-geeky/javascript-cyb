//      take input from user 

let arr1 = []; 

for (let i=0; i<5; i++) { 
    arr1[i] = (parseInt(prompt(`enter array values `)) );
}

//  print 10 no.s  1. 
for (let i=0; i<5; i++) { 
    console.log(arr1[i]);
}
console.log(arr1);


//  reverse.. 3.  
let three = arr1.slice(1,4).reverse(); 
console.log(three);

//  date time current.. 4. 
let dateTime = Date(); 
console.log(dateTime);

//  //  /   random  b/t  1- 15  5. 


 //  // sum.. 2. 
let arr3 = [3, 6, 7, 12, 15]; 

let total = arr3.reduce( function(acc , currVal) { 
    console.log(`accumulator : ${acc} and currVal : ${currVal}`);
    return acc + currVal; 
}, 0)

console.log(`so total of arr3 : `, total); 








//  //  /   random  b/t  1- 15  5. 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumber = getRandomIntInclusive(1, 15);
console.log(randomNumber);


//      **      &&      @@      ##      **      // 
// arr4 = [10, 20, 30, 40, 50]

// function sumArrays(arr4) { 
//     let sum = 0; 
//     for (let i=0; i<5; i++) { 
//         sum += arr4[i]; 
//     } 
//     return sum; 
// } 
// const num = [10, 2, 30 , 4, 50]; 
// const tot = sumArray(num); 
// console.log(tot); 




// array = [1, 2, 3, 4, 5]; 

// function sumArray(arr) {
//     let sum = 0; 

//     for (let a of arr) { 
//         sum += a; 
//         return sum; 
//     } 
// }

// console.log(sumArray([2, 4, 6])); 

//   SUM of  elements of ARRAYS

//                          simple loop
let arr = [1, 2, 44, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) { 
    sum = sum + arr[i]
}
console.log(sum);   //  56  for loop simple method

//                              
let ray = [10, 20, 30, 40, 50]; 
let add = 0;  

for (let a of ray) { 
    add = add + a;  
}
console.log(add);    // 150   for-of only       add + i


let jod = 0; 
for (let a in ray) { 
    jod = jod + ray[a]; 
}
console.log(jod);     // 150 for-in need       add + arr[i]    



















