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
    hello: function() { 
        console.log("hello javascript");
    }
}; 
//    Object.property //

console.log(person.age);        // 24
console.log(person["age"]);     // 24
console.log(person.address.state);  // bhopal 

//  update values / 

person.iseligible = false; 
person.name = "peter"; 
console.log(person);

//  new property add . 
person.address.city = "goa"; 
console.log(person);


//  if we add function in object like this 
person.display = function() { 
    console.log("hello friends hwo are you ");
}; 
person.hello();     //  hello javascript
console.log(person);

//       spread operators not  add it   make  COPIES  of object  elements only or its part
//          not array object sign [] {}  

//      arr.cancat   it add ++   with array [  sign ]
 const obj1 = { 
    a: 1, 
    b: 2,
}; 
const obj2 = { 
    c: 3, 
    d: 4, 
}; 
const obj3 = {...obj1, ...obj2}; 
console.log(obj3);      //  {a: 1, b: 2, c: 3, d: 4} 

//  array of objects. //            data fetch from API.......

const list = [ 
    { name: "harry", age: 45}, 
    { name: "hitesh", age: 50 }, 
    { name: "hagrid", age: 33}, 
    { name: "dumbledore", age: 300},  
]; 

console.log(list[1].name);  // hitesh 
console.log(list[3].name + " " + list[3].age);  // dumbledore 300
console.log(`${list[3].name} ${list[3].age}`);      // dumbledore 300

//  destructuring in object  and array:  break the element into variable 
// UNPACKING THE VALUES OF AN ARRAY OR OBJECT INTO VARIBALES 
const arr = [1, 2, 3, 4, 6, 7, 9, 2] 

//  destructuring with spread operator     will use in  REACT   

const [a, b, c, d, ...x] = arr; 
console.log(`${a} ${b} ${c} ${d}`);  // 1 2 3 4
console.log(`${x}`);    // 6,7,9,2 


//  DESTRUCTURIING  in objects          //    IMP  react  REACT    REACT   REACT 
const car = { 
    color: "black", 
    model: "bmw", 
    year: 2021,
}

// same name as propety 
const {color, model, year} = car 
console.log(color, model, year);        // black bmw 2021 

//  alias  (AKA) :  name is shorten     //  IMP  react  REACT    REACT   REACT 
const {color: p, model: q, year:r} = car 
console.log(p, q, r);       // black bmw 2021

//      OBJECT COMPLETED 































