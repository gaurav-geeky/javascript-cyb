/*  line 139.. 
let map = new Map()

map.set("dg", "dogesh")
map.set("ct", "catesh")
map.set('lz', 'lizard')


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "apple"
}
//  object for in 
for (let ok in myObj) {
    console.log(ok);
}

for (let bee in myObj) {
    console.log(myObj[bee]);
}
console.log('  obj   and    array');  



let pro = ['js', 'cpp', 'jango', 'java', 'mern'];

for (let each in pro) {
    console.log(pro[each]);
}

console.log(` \n \n `);


const code = [
    {
        langName: "apple",
        file: "jv"
    },

    {
        langName: "banana",
        file: "fs"
    },

    {
        langName: "papaya",
        file: "js"
    }
] 

code.forEach( function (every, index, array) { 
    console.log(every.file, index, array);
}); 



///   lesson 30,  filter , map , reduce.  

const machine = ['javascript', 'mongoDB', 'java', 'react', 'mern']; 

machine.forEach( function(oly) { 
    console.log(oly);
}); 


// let num = ['2', '4', '6', '8', '10'];  

// num.forEach( function (each)  { 

//     if (each === Number) { 
//     console.log(2*each); 
//     }
// });    *******************


let fill = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12]; 

// let use = fill.filter (  (each) => each > 4;  console.log(object); ) 
//              *********************

// console.log(use);

//     { 
//  if (each > 4) {
//         return each; 
//     }
// })

// console.log(use);


const book = [
    { title: "bk one",  genre: "history", publish: 2000 }, 
    { title: "bk two",  genre: "geo", publish: 2001 }, 
    { title: "bk three",  genre: "geo", publish: 2000 }, 
    { title: "bk four",  genre: "pol", publish: 2001 }, 
    { title: "bk five",  genre: "pol", publish: 2000 },  
]

let userbook = book.filter ( (each) => (each.publish === 2000 ) ) 
console.log(userbook);

// filter is   to find some specific condition. 

//  MAP   to give some condition   to get output. 

const shopping = [ 
    { 
        itemName : "js course", 
        price : 2999
    }, 
    { 
        itemName : "python course", 
        price : 999
    }, 
    { 
        itemName : "mobile course", 
        price : 5999
    }, 
    { 
        itemName : "ds course", 
        price : 12999
    } ,  
] 
console.log(' \n \n ');

const price = shopping.reduce( (acc, ok) => acc + ok.price, 0)

console.log("total Price: " ,  price);  

*/

/*
//  how to select parent and child 

let parent = document.querySelector('.parent'); 
console.log(parent);  

console.log(`\n`);

console.log(parent.children[2].innerHTML);  

console.log(`\n`);

for ( let i =0; i< parent.children.length; i++) { 
    console.log(parent.children[i].innerHTML);
} 

console.log(`\n`);

parent.children[1].style.color = "orange";   

console.log(parent.firstElementChild); 
console.log(parent.lastElementChild);       // parent se bachha 

console.log(`\n`);

let days = document.querySelector(`.day`); //  bacchha se parent
console.log(days);

console.log(days.parentElement);   //  parent ; 

console.log(days.nextElementSibling); //  bhai next

console.log("nodes: ", parent.childNodes);





///   now create new element in DOM DOM 

const div1 = document.createElement('span')

// console.log(div1); 

div1.className = "div1class"; 

console.log(div1);

div1.id = Math.round(Math.random()*10 + 1); 


div1.setAttribute("title", "local")  
//  why we not use = sign  but for create ele and class use = sign

div1.style.cssText = "background-color: pink; color:red; font-size: 30px; font-weight: bolder; "; 


// div1.innerHTML = "<p> paragraph</p>"; 

const addText = document.createTextNode(" this is my text"); 
div1.appendChild(addText)  

document.body.appendChild(div1); 

console.log(div1);

*/

//  lesson 34      add , edit , remove element in DOM .. 



// add new element in doc. 

/* 1.  make an element to be added 
 2. add something (text, code etc in it) using innerHTML , innerText etc 
 3.  select element using query or something to  append (god lena) created element in it.  */

/* 
 
function add (lang) { 
   const li = document.createElement('li');

   li.innerHTML = `${lang}`; // inner html ele traverse whole tree

   document.querySelector('.language').appendChild(li); 
}

add ("python") 
add ("java")

function addEle (lang) { 
   const li = document.createElement('li'); 

   li.appendChild(document.createTextNode(lang)); 
   // create text node no need traverse whole good 4 big data

   document.querySelector('.language').appendChild(li)
}
addEle(`django`) 
addEle("swift-apple")


//  replace element with ..

const second = document.querySelector("li:nth-child(2)")
console.log(second);

const newLi = document.createElement('li'); 
newLi.textContent = "new second "; 

second.replaceWith(newLi);    


//   now edit element. dom    method : 1 

let three = document.querySelector("li:nth-child(3"); 
three.textContent = "this is ecdit one to show edit element"



//   now   remove element ..  REMOVE  REMOVE REMOVE ELE..  

const last = document.querySelector('li:last-child'); 
last.remove(); 

*/


//  lesson 36 events.  

// let ted = document.getElementById('ted'); 

// ted.addEventListener('click', button); 

// function button(b) { 
//     console.log(b);
// }

// let badminton = document.getElementById('badminton')

// badminton.onclick = solof;  

// function solof () { 
//     console.log('this is onlick');
// }

// let basketball = document.getElementById('basketball'); 

// let photo = document.getElementById('images'); 

// photo.addEventListener('click', function () { 
//     console.log(' outer : photo');
// })

// basketball.addEventListener('click', function() { 
//     console.log(`  inside : basket`);
// }) 

//  true event will run first then next 
// default  down to top  1st inner, 2nd outer; event propogation. 

// do not want  inner to higher ----  stop propogation


// badminton.addEventListener('click', function(e) { 
//     console.log(`inner badminton`); 
//     e.stopPropagation(); 
// }, true) 

//  to use it apply : true  at image  and stop propogation() method


// let google = document.getElementById('google'); 

// google.addEventListener('click', function(e) {
//     e.preventDefault(); 
//     e.stopPropagation(); 
//     console.log('google click ho gya');
// }, false)

//  preventDefault : it cancels the event, happens on clicking 
// here google site will no open 



//  to disappear all images
// photo.addEventListener('click', function(d) { 
//     console.log(d.target.parentNode); 
//     let free = d.target.parentNode 
//     free.remove()
// })


// photo.addEventListener('click', function(e) { 
//     console.log(e.target.tagName); 

//     if (e.target.tagName === 'IMG') { 
//         console.log(e.target.id); 
//         let vanish = e.target.parentNode 
//         vanish.remove() 
//     }
// })



//  lesson 39  API API API API API .  



//  XMLHttpRequest() M  method to send request


const requstUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();

xhr.open('GET', requstUrl);
console.log('here');
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);

        console.log(data);
        console.log(typeof data);
        console.log(data.followers, data.id, data.repos_url );

    }
}
xhr.send();

//   

function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }
    document.getElementById("result").textContent = "Result: " + result; 
} 
console.log(`object`);







