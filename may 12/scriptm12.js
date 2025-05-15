//   array method .  to string change to string and charat(0) become 1st digit.  

//     *** SPREAD operator copies a part    or   a complete array to another array.  

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

const num3 = [...num1, ...num2];
console.log(num3);

//     ***  isArray,  .from     check if it is array  ? 

const x = Array.isArray(num1);
console.log(x);     //   is it actually an array or not.. ***

const y = Array.from('98765');
console.log(y);                 // it forms array,  (5) ['9', '8', '7', '6', '5']

//      DESTRUCTURING  with    SPREAD  opearator
// breaking the elements of an array into variables in single line

const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19];

// const a = arr[0]; 
// const b =arr[1]; 

const [a, b, c, d, ...left] = arr;
console.log(a, b, c, d);            //   11 12 13 14   
console.log(left);                  //      (5) [15, 16, 17, 18, 19]


//         QUESTION    
const arr1 = [1, 2, 3, 4, 5];
//    target =   [6, 5, .... 0]
arr1.unshift(0);                //      unshift  add  ,   shift remove 
arr1.push(6);                   //      push add ,   pop remove
arr1.reverse();

console.log(arr1);      // ans

//      QUESTION 
const arr11 = [1, 2, 3, 4, 5];
const arr12 = [5, 6, 7, 8, 9, 10];

const newArr = [...arr11, ...arr12];
newArr.splice(5, 1);

console.log(newArr);      // ans



//  object literal

const person = {
    name: "john",
    age: 45,
    isEligible: true,
    address: {
        state: "mp",
        country: "India"
    },
    hobbies: ["dance", "singing"],
    greet: function () {
        console.log("hello");
    }
}
console.log(person.name);
console.log(person['name']);
console.log(person.isEligible);
console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();     //  this is function inside it console so no need to do console.. 



// ************* may 14.. today..  asra mam  objects... *******************************

//  property can be update using  . notation and   can also add

person.age = 66;            //  value  update. 
person.color = "fair";   // new 
console.log(person);
console.log(person.age);

//      SPread  operator {...}      IMP for REACT ..   %%%%%%A

const obj1 = {
    a: 1,
    b: 2,
};
const obj2 = {
    c: 3,
    d: 4,
};
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// console.log(`element in object 3 : ${obj3}`);   // only for primitive values. 




//      ARRAY OF  object  imp   imp    imp imp imp   imp  %%%%%%%%%%

const students = [
    { name: "ram", id: 1, course: "python" },
    { name: "laxman", id: 2, course: "java" },
    { name: "sham", id: 3, course: "mern" },
    { name: "hari", id: 4, course: "fullstack" },
];

console.log(students[0]);

console.log(students[0].name + " id: " + students[0].id + " course: " + students[0].course);

console.log(`student in 2nd row name: ${students[1].name} has id: ${students[1].id} opted for ${students[1].course} course.`);


//      destructring in  object : breaking element into variable or single line 

const car = {
    color: "white",
    model: 2024,
    brand: "ford", 
    tyre: "MRF",
}
console.log(car);

//         *   server se data lana h  JSON     ARRAY OF OBJ ;; 
// API  se data lenge isi format me  denge isi me.  
//        *   object  convert to JSON string...  using  JSON.stringify(object);  
//  it looks like object but not  key is always   in  " " ,  it is JSON string 
//         * can't access like object. 


const database = JSON.stringify(car);
console.log(database);              //  {"color":"white","model":2024,"brand":"ford"} 

//      CONVERT json  string   to      js object. 

const jsObj = JSON.parse(database); 
console.log(jsObj);



 
































