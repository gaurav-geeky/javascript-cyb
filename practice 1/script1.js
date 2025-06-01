


/////  

const num1 = [1, 2, 4, 8, 16, 32];
const newnum1 = num1.map(fun1);

function fun1(x) {
    console.log(x);
    return x * 2;
}
console.log(newnum1);

///    map can do both   return and print    new array
console.log("\n");


const num2 = [11, 22, 33, 44, 55];

let new2 = num2.forEach(function (x) {
    console.log(x * 2);
    return x + 5;  // no in for each. 
})

console.log(new2);

// for-each is for only for print new array , it can not ***************** return values. 
console.log("\n");


const num3 = [10, 15, 20, 30, 40];
const new3 = num3.filter((z) => {
    if (z % 3 == 0) {
        console.log(z * 2);
        return z;
    }
})
console.log(new3);

// same as map. filter can do both return and print  new array,  
//  speciality it filters out the condition given in function. 
console.log("\n");


const num4 = [111, 222, 333, 444];
const new4 = num4.reduce(function (total, curr) {

    console.log(`accumulator is ${total} and current ${curr}`);
    return total + curr;
});
console.log(new4);

// same can apply   return value   +   console(print) both 
// it gives  total amount of array like for billing items
console.log('\n');

let f = "3456";

console.log(f, typeof f);
console.log(+f, typeof +f);

let stra = (f.split('').reverse());
console.log(stra);

let strS = (stra.toString(''));

console.log(strS, typeof strS);


//    event.  

//  isme button select krne ki zarurat ni h . us btn ke function ko hi code dena h jo kaam krwana h wo. 

function touch() {
    let inp1 = document.getElementById('ip1');

    inp1.value = "delhi";
}


//  lekin addevent me sbko uthana h because of make at a time.  

let btn = document.getElementById('btn2'); 

btn.addEventListener('click', run) 

function run()  { 
    let inp2 = document.getElementById('ip2').value; 
    let hd2 = document.getElementById('head2'); 

    hd2.innerHTML = inp2; 
    hd2.style.cssText = ' color: darkblue; background-color: yellow; font-size: 40px; '; 
}





















