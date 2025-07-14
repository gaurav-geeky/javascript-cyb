
//  location.reload()   :  to refresh page. 
//  location.href()   :  <a>  anchor tag of js   to jump on differ page.  


let okk = { 
    name: "arav",  
    age: "23", 
    color: "fair", 
    height: "5.5", 
    edu: "graduate"
}

let sendData = () => { 
    // data.JSON.stringify(''); 
    localStorage.setItem("jsonData", JSON.stringify(okk));     
}  //                       key name..


let get = () => { 
    console.log(JSON.parse(localStorage.getItem("jsonData")));
}  // here need to write only key name. 


let rem = () => { 
    localStorage.removeItem("Name")
}


let arr1 = [99, 88, 77, 66, 55]; 

let y1; 
for(let each of arr1) { 
    y1 = each;
} 


console.log(y1);