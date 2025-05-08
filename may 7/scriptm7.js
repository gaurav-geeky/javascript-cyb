//  may 7 ..... loops   for in ,  for of,   for Each 
//      when return we can store it in a variable. 

// do (cond i) { 
//     i++
// }

// for-in   ( used for objects and arrays)   for-in target through key 

// for (key in object) { 

//          for-in is   used to print  huge value . 
///         for-in    iterate in   object's  properties.  
//          can get th  dot          but not in for-of
// }

const person = { 
    name: "johnny", 
    age: 44, 
    color: 'black', 
    country: "india", 
}; 

for (let item in person) { 
    console.log(item, person[item]);
}
//      in this item target  keys
/*  name johnny
 age 44
 color black
 country india  */  

//      ( variables in ARRAYS )   in for in variable denote index no  

const arrays = [10, 20, 30, 40, 50] 
for (let x in arrays) { 
    console.log(arrays[x]);
}
//      10 , 20, 30, 40, 50 

//  ****   FOR OF  loop   ..    FOR OF loop     FOR OF      FOR OF      FOR OF  ******* // 

//      for of  used in          object , string,  arrays 
//      ( variables in ARRAYS )   in for in variable denote index no  
//      BUT IN     FOR OF  VARIBALE DENOTE DIRECTLY TO   ELEMENT.  

const fruits = ["kiwi", "orange", "apple", "cherry"];  

for(let x of fruits) { 
    console.log(x);
}
/*      kiwi
 orange
 apple
cherry      */

//      ADVICE USE   for of (array ke liey)   for in ( for object)
// Q  write a func to print  square of all no. in loop in console  

console.log("           space");           

const arr = [1, 2, 3, 4, 5, 6, 7]; 

function sqaure () {
    for (let x of arr) { 
        let sq = x*x; 
        console.log(sq);
    }
} 
sqaure(); 


//     using for loop 
//      write function to print fibonacci series upto a given range. 
//      function to print  odd b/w   1 to 100. 
//  to print even   b/t   2 to 200. 

function oddEven () { 

    for (let i=1; i<=100; i++) { 
        if (i%2 == 0) { 
            console.log(` even no: ${i}`);
        } 
        else { 
            console.log(`odd no:  ${i}`);
        }
    }
}

oddEven(); 



















