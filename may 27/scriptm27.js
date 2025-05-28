//        for   loops : 

    for (let i=0; i<=10; i++) { 
        console.log(i);
    }
    
    console.log(`for`);
//  while 
 let i=0; 
 while (i <= 20) { 
    if (i%2 == 0) { 
        console.log(i);
    }
 } 
console.log(`while    do-while`);

//      do - while ( in this condition will run at least 1 time ) 

let y = 11; 

do { 
    console.log(y); 
    y++; 
} while(y<11); 

//    for in loop  : the js for in   statement loops through the properties of an OBJECT .  

const person = { 
    name: "john", 
    age: 24, 
    city: "bhopal"
}
for (let x in person) { 
    console.log(person[x]);

}

//  in  for-of loop    x denote  element   directly  without  obj, array  names; 

let str = 'javascript'; 
//      Q. 

//  for Each ()  loop : method calls a function ( a callback function ) once for each array element. 
//   it is  method in which  a function is to be called (call back fun)
//  a func which is given as argument to anoth function is call back .   
//  fuc that take ano function as argument 

//  it is higher order function 

const num = [34, 45 , 56, 67]; 

let txt = " "; 
num.forEach(myfun); 

function myfun(x) { 
    txt += x + " "; 
} 
console.log(txt);

//  MAP method  is used for creating a new array from an existing one, applying a function to each one of the element of the array. 

// for each not give new arrya only loop and print answer but    map gives new array 
 
 
//  MAP MAP  pic lena h . 

const num1 = [1, 2, 3, 4, 5]; 

const newArr = num1.map(myfun1); 

function myfun1 (x) { 
    return x*x; 
} 
console.log(newArr);







