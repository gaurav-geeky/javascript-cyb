//  JSON  
//  array of object but user "user" in double quote  

// normal data ko api me nahi bhej   sakte isiliye  JSON banate hai 

const person = { 
    id: 1, 
    name: "harry potter", 
    age: 34, 
    city: "London", 
}; 

// OBJECT convert to JSON form  

const data = JSON.stringify(person); 

console.log(person);    //      > {id: 1, name: 'harry potter', age: 34, city: 'London'}  we can open it 
//  it is object

console.log(data);  //  {"id":1,"name":"harry potter","age":34,"city":"London"} 
//                      it is json form data

//  to create direct json   make  sss.json file *** IMP  *** 


//      json STRING  to  OBJECT..   
const mydata = JSON.parse(data); 
console.log(mydata);    //        > {id: 1, name: 'harry potter', age: 34, city: 'London'}  we can open it      


//      Q.  array of object 

const liberary = [ 
    { title: "english",
     author: "harray",
     status: { 
        own: true,
        reading: false,
        read: false, 
    }  
    },
    { title: "english",
        author: "harray",
        status: { 
           own: true,
           reading: false,
           read: false, 
       }  
       }  ,
       { title: "english",
        author: "harray",
        status: { 
           own: true,
           reading: false,
           read: false, 
       }  
       }   
]  
//   **  step 2 
// console.log(liberary.status.read);


// **  step 3   destructuring 
// const {title: t} = liberary;  
// console.log(t);


// ** step 4. convert object to JSON STRING 
console.log(JSON.stringify(liberary));
//  [ {"title":"english"}, {"author":"harray"}, {"status":{"own":true,"reading":false,"read":false}} ]






















