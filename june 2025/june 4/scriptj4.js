// BOM : browser obj model __ alert, console, confirm is  part of BOM.  
/* 
    confirm takes two button  ok/ cancel. 
    js is lite weighted language . css is weighted so upper. 
*/

let ans = confirm("did you like my website");

if (ans) {
    console.log("thank you");
}
else {
    alert("sorry")
}
//  array to string    join method with (seprator) bbbbbbbb but not str to array. 

let num = 1234;

let rev = (Number(num.toString().split("").reverse().join("")));

console.log(rev);

function hide() {
    let para = document.querySelector("#text");
    let btn = document.querySelector("#btn");

    if (para.style.display == "none") {

        btn.innerHTML = "Hide"
        para.style.display = "block"
    }
    else {

        btn.innerHTML = "Show"
        para.style.display = "none"
    }
}

//  template literal  use single  inside double "   '  '   "  vice-versa.



//  alt + D .

// Q
//  design , all clear, operator should not come twice.  








