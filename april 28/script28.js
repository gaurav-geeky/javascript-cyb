//   ARRAY qasim sir 28 april 

let arr = [1, 2, 5, 7, 9, 11, 13, 15, 17, 19]

// console.log(arr);
// only elements without brackets   for loop 
//  when loop start on array  i=0; 
//  for loop first value print  then increase ++; 

for (let i=0; i<=9; i++) { 
    console.log(arr[i]);
}
console.log("space");

//  Q. write a programme to take 10 inputs from the user(int.) 

let arr1 = []  

for (let i=0; i<5; i++) {
    arr1[i] = parseInt (prompt ("arr elements: ")) 
}
for (let i=0; i<5; i++) {
    console.log(arr1[i]); 
}
console.log("so 1 - 3 element of Array: "); 

for ( let i =0; i<1; i++) { 
    console.log(arr1.slice(1, 4));
} 

















