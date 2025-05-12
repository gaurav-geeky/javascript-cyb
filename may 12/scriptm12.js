//   array method .  to string change to string and charat(0) become 1st digit.  

//     *** SPREAD operator copies a part    or   a complete array to another array.  

const num1 = [1, 2, 3, 4, 5]; 
const num2 = [6, 7, 8, 9, 10]; 

const num3 = [...num1, ...num2]; 
console.log(num3);

//     ***  isArray,  .from     check if it is array  ? 

const x= Array.isArray(num1); 
console.log(x);     //   is it actually an array or not.. ***

const y = Array.from('98765'); 
console.log(y);                 // it forms array,  (5) ['9', '8', '7', '6', '5']

//      DESTRUCTURING  with    SPREAD  opearator
// breaking the elements of an array into variables in single line

const arr = [11, 12 , 13 , 14, 15,  16,  17, 18, 19]; 

// const a = arr[0]; 
// const b =arr[1]; 

const [a, b, c, d, ...left] = arr; 
console.log(a, b, c, d);            //   11 12 13 14   
console.log(left);                  //      (5) [15, 16, 17, 18, 19]


//         QUESTION    
const arr1 = [1, 2, 3, 4 , 5]; 
//    target =   [6, 5, .... 0]
arr1.unshift(0);                //      unshift  add  ,   shift remove 
arr1.push(6);                   //      push add ,   pop remove
arr1.reverse(); 

console.log(arr1);      // ans

//      QUESTION 
const arr11 = [1, 2, 3, 4, 5]; 
const arr12 = [5, 6, 7, 8, 9, 10]; 

const newArr = [...arr11, ...arr12]; 
newArr.splice(5,1); 

console.log(newArr);      // ans



//object literal

const person = {
    name : "john",
    age : 45,
    isEligible : true,
    address : {
        state: "mp",
        country : "India"
    },
    hobbies : ["dance","singing"],
    greet: function(){
        console.log("hello");
    }
}
console.log(person.name);
console.log(person['name']);
console.log(person.isEligible);
console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();     //  this is function inside it console so no need to do console.. 





































