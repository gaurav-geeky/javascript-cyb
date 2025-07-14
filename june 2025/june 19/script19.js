/*  

async to  sync   using  async await 
*/

// let FetchData = async () => { 

//     // promise :  pending,  resolve,  reject  
//     let url = 'http://localhost:3000/flight' 

//     let resp = await fetch(url, {method: "GET"}) 

//     let data =await resp.json() 
//     console.log(data); 
// }
// FetchData()  

//  to show thing in table format we need to use  MAP  functin which takes call-back function   get ID  of tbody  on which perform map function 
// do everything in  Fetch Data  function.   

//  june 20.  table and  delete data.  


let Fetchdt = async () => {

    // promise :  pending,  resolve,  reject  
    let url = 'http://localhost:3000/flight'

    let resp = await fetch(url, { method: "GET" })
    let data = await resp.json() 

    console.log(data);                          // show JSON data in console.

    let show = document.querySelector("#show")  // get tbody th. get ele. 

    data.map((e) => {                           // now, show data in table format.  
        show.innerHTML += ` 
                    <tr> 
                        <td> ${e.name} </td> 
                        <td> ${e.age} </td> 
                        <td> ${e.Adhar} </td> 
                        <td> ${e.state} </td> 
                        <td onclick= "Del('${e.id}')" > Delete </td>  
                    </tr>                       
                `
    } )
}
Fetchdt()


let Del =(id)=> {  

    let url = `http://localhost:3000/flight/${id}`

    fetch(url, {method: "DELETE"})  

}
   

//   ctrol c +  ctrol v      copy down ho jayega














