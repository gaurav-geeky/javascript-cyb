
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

//                                      Q 9. Write a Javascript program to find  the PRIME number in a given array?

let arr13 = [3, 6, 7, 9, 11, 15, 17, 23]; 

for ( let i=0; i<arr13.length; i++)  { 
    let prime = true; //                it is must  at every check point... otherwise wrong result; 

    for (let j=2; j<arr13[i]; j++) { 
 
        if (arr13[i]%j == 0) { 
            prime = false; 
            break; 
        } 
    } 
    if (arr13[i] > 1 && prime == true) { 
        console.log(arr13[i]);
    } 
}

//                               Q 10. Write a Javascript program to find  smallest value in an array? 

let arr11 = [ 6, 44, 12, 4, 111, 99]; 
let small= arr11[0]; 

for (let i=0; i<arr11.length; i++) { 
    if (arr11[i] < small) { 
        small = arr11[i]; 
    } 
}
console.log(`smallest value in arr11: ${small}`);

//                               Q 11. Write a Javascript program to find  the sum of the values of an array? 

let arr12 = [1, 11, 2, 22, 4, 55]; 
let sum=0; 

for (let i=0; i<arr12.length; i++) { 
    sum = sum + arr12[i]; 
}
console.log(`sum of values of array: ${sum}`);

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

//                                   Q 15. Write a Javascript program to find the given year is leap year or not?  

let year = prompt("enter a year: "); 

function varsh(saal) { 

    if ((saal%4 == 0 && saal%100 != 0) || (saal%400 == 0)) { 
        console.log(`it is leap year:`);
    } 
    else { 
        console.log(`not a leap year :`);
    }
}

varsh(year); 

//                                 Q. 13. Write a Javascript program to find  current age of any person  by using his/her data of birth? 

//                                  Q 14. How to calculate the yesterday's date in JavaScript?  

































