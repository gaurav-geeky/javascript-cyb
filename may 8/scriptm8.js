//          
//      BOM   browser object model : DOM   is a part of BOM 

// DOM :   THE HTML DOM MODEL IS CONSTRUCTED AS A TREE OF OBJECTS 
//  the HTML dom  is a standard for how to get, change, add, or delete HTML elements.  

///  html dom has some methods  which can be performed   over html elements .  


let heading = document.getElementById('demo');
heading.innerText = "Hello world"               // in this we can give any html   tag 


//  3 way to print   console.log     head.innerHTML    and   alert

//      **                                          ***********************************

let div = document.getElementById('parent'); 

// div.innerHTML = "<h1>" + "dfdf" ' </h1>'
div.innerHTML = `<h1> Hii I am JS </h1>`    // back ticks

div.innerHTML = new Date ();        // 
//                                                                        *******************

let myimg = document.getElementById("myimg"); 
myimg.src = "/photo/ted22.jpeg";                    //  attribute change.. 

//  getElementById   method                .innerHTML  is property

//      changing style   mainly  CSS  CSS  CSS   

heading.style.color = "red"; 
heading.style.fontSize = "70px";      //  fontSize in camel case

div.style.color = "blue"; 

document.write("fskjf sdfjsd sdfhsd;f  jsf;l")         
document.write("")
//  we can also write something using this  // write directly into tag  and can create element also 


//      event something  to perform  some   action on clicking something ... 





























