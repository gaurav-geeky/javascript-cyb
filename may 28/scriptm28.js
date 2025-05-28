//          
const fruit = ['apple', 'cherry', 'kiwi', 'grapes'];   

let text = '<ul>';   //  here, we have started ul  

fruit.map( function (x) { 
    text += `<li> ${x} </li>`; 
}) ; 

text += "</ul>";  //  here, we have closed ul 

document.getElementById('demo').innerHTML = text; 

//      MAP  MAP   MAP  MAP  MAP  MAP MAP    MAP  MAP   MAP  MAP  MAP  MAP MAP  


//  we are to make table ;  how to use map to make___ table , ul list  etc   IMP IMP IMP  data from server. 

const person = [
    { name: "john", age: 23, }, 
    { name: "harry", age: 34, }, 
    { name: "odin", age: 45, },  
];  

let table = `
    <table  border = 1px >
    <tr> 
    <th> Name </th>
    <th> Age </th> 
    </tr> 
`
///                      here, we have applied map ( made codes) to form table ; 
person.map ( (x) => { 
    table += ` <tr>
    <td> ${x.name} </td>
    <td> ${x.age} </td>
    </tr> 
    `; 
})

table += " </table> "; 

document.getElementById("mytable").innerHTML = table; 

//    FILTER FILTER  :  the filter() method takes each element in an array and it applies a conditional statement against it. 


const nums = [10, 20 , 33, 23, 36, 38, 88]; 

const newNums = nums.filter( function(x) { 
    if (x>30) { 
        return x; 
    }
})
console.log(newNums);

//                      when we return  and print outside function it give in array form .
//      but when console inside function   .. then it only prints .

//  array of students 

//  REDUCE : method  it is necessary in reduce  to take  2 parameters ( accumulator,  current value); 




  










