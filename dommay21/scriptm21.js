//          DOM  dom DOM  dom  DOM  dom  DOM  dom

// when browser loads our web page 
//  when a web page is loaded in the browser it converts the HTML document into DOM (doc.. object model) 
//  DOM is a tree of elements in which all the elements are treated as object. 

// may 21

/* 1.  when a web page is loaded, the browser creates a doc object model of the page. 
2.   the HTML DOM model is constructed as a tree of objects: 
3.  with the object model. js gets all the power it needs to create dunamic HTML.  

4.   HTML DOM  methods are actions you can perform (on HTML elements). 
5.  HTML DOM  properties ar values (of HTML  elements) that you can set or change. 

6.  1st we will target the element    then     perform any operation on element.  

*/
//          THESE ARE DOM  methods to target element or access it.  

// let h1 = document.getElementById('demo'); 

// let h2 = document.getElementsByTagName("h1"); 

// let h3 = document.getElementsByClassName("head");  // in this we get HTMLCollection  node list
// console.log(h3[0]); 

let h4 = document.querySelector(".head") //  here, we can use id, class , tag (like in CSS . or #)
console.log(h4);
//                  in query Selector All , it comes like nodelist HTML collection ,   in single only 1st element. 

h4.innerText = "hello world";   // we can change inner text , css and any type of designing 

let ok = document.getElementById("demo2")

// let enter = prompt("enter name: ");

// ok.innerText = enter;  //  innertext html property  

ok.innerHTML = `<p> hi, this is para </p>`;   
console.log(ok);

let one = document.getElementById('demo'); 
//                                              create table inside inner HTML . 
one.innerHTML = `<table> 
<tr>  
 <th>Name </th> 
 <th> Age </th> 
</tr>

<tr>  
<td> gaurav </td> 
<td> 10 </td> 
</tr>

</table>`;

let photo = document.getElementById("image1"); 

photo.src = "/snowman.jpeg";
















