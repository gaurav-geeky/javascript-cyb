
// test 1 

//                     Q 1.   get 1st  3 char of string.. 
let strip = "Fullstack";
strip = strip.charAt(0) + strip.charAt(1) + strip.charAt(2);
console.log(strip);

//                     Q 2.    delete 1st char of string.. 
let firstChar = "Development"; 
firstChar = firstChar.substring(1, 11); 
console.log(firstChar);

//                     Q 3.    sort the array of strings .. { acc.. to dictionary }   
let fruits = ["kiwi", "papaya", "banana", "guava"]; 
console.log(fruits.sort()); 

let color = ['red', 'green', 'pink', 'orange'];   // { acc to length.. } 
color.sort( (s1, s2) => 
    s1.length-s2.length
); 
console.log(color);

//                              Q 4. remove all line break from string.   /\r?\n|\r/g 

const stringWithLineBreaks = "This is a string\nwith line breaks.\r\nAnd some more.\r";
const stringWithoutLineBreaks = stringWithLineBreaks.replace(/\r?\n|\r/g, " ");
console.log(stringWithoutLineBreaks); // Output: "This is a stringwith line breaks.And some more."

//                                  Q 5  extract a number from string ... 
let num = "345 km"; 
let ans = parseInt(num); 
console.log(ans); 
//                                    /\D/g  ___remove all non-Digits. 
let newone = "34kj534h6kj3456j44"; 
newone = newone.replace(/\D/g, ""); 
console.log(newone);


//                                  Q 6..  convert string  into  DATE  
let dinak = "2022/02/11"; 
var dinakNew = new Date(dinak); 
console.log(dinakNew); 


let cal = "3030-01-11"; 
cal = new Date(cal); 
console.log(cal.toDateString());  

//                                  Q 7.   Insert a String at a Specific Index. 
let st1 = "hello world"; 
let st2 = " beautiful"; 

let result = (st1.slice(0, 5) + st2 + st1.slice(5)) ; 
console.log(result);

//                                  Q 8.  How to find the longest word within the string in JavaScript ? 
let st11 = "this is our javascript method"; 
newArr = st11.split(" ");                     // split  method  to convert string to array (" ")    " " se separate hoga element
console.log(newArr); 
//                               ['this', 'is', 'our', 'javascript', 'method'] ;   

let long = ""; 

for ( let i=0; i<newArr.length;  i++) { 
    if ( newArr[i].length > long.length) { 
        long = newArr[i]; 
    } 
}
console.log(long);    

/*      Q 9. Write a Javascript program to find  the prime number in a given array? 
10. Write a Javascript program to find  smallest valuue in an array? 
11. Write a Javascript program to find  the sum of the values of an array? 
13. Write a Javascript program to find  current age of any person  by using 
his/her data of birth? 
14. How to calculate the yesterday's date in JavaScript? 
15. Write a Javascript program to find the given year is leap year or not?    */ 


//                               Q 12. Write a Javascript program to check the given string is palindrome or not? 

let str22 = "google"; 
console.log(str22); 

let arr22 = str22.split('').reverse().join('');   // string to array
console.log(arr22); 

if (str22 === arr22) { 
    console.log(`${str22 } is a palindrome: `);
}
else { 
    console.log(`${str22} string is not palindrome`);  
}


















































