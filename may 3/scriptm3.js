//  FUNCTIONS .. 

// console.log(  );   gives output 
// return gives value
// parameters are the name of the variable that are used to pass data into a function.
//      4 type function  ,, 
// ,   no para  ,  with para,   return type,   no return 

//              define time parameter
function one (a, b) { 
    console.log(a+b);
    console.log("hello"); 
}
//      calling time arguments. 
one( 5, 7); 
// no return  with parameter  
//  HERE we can not store  value   anywhere.    **************


//      function with return type   and  parameter ... 
// /   it returns  value ..        after return nothing will execute , return comes out  .
//      //  HERE we can store  value   anywhere. 
function multiply (num1, num2) { 
    return  num1*num2; 
}

let result = multiply(22, 10)
console.log(result);        //  220         *************

//      return type with no parameter . 

function show() { 
    return "harry"; 
}
let ans = show()
console.log(ans);   //  harry .     *************


//      QQQQQQQ Q function to find cube of a number. 
function cube (x) { 
    return x*x*x; 
} 
let ok = cube(4); 
console.log(ok);    // 64           //   *********   these all are regular functions  


//      function expression ...   like normal differnece is (FUNCTION is store in varibale )
let  funExp = function (s) { 
    return s*s*s; 
}
console.log(funExp(5));     //  125...              ****

//   =>   arrow function is ES 6 feature  launched 2015.  shorthand of normal and func expression
const harro = (name) => { 
    console.log(name);
}
harro("javascript");        //  javascript              ***

























