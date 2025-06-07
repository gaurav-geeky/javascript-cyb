//      set time out to execu a fun once after tine delay (in mili sec) 

//     set interval to exe repeated fun at sp interval ( in mili sec)  .  to stop clear interval


  //  on clicking btn  pri  1, 2, 3 on console


let btn = document.querySelector('#btn'); 

let count=0
let inter; 

time = ()=>
{

    inter = setInterval ( ()=> {
    console.log(count);
    count++;

} , 1000) 

}

end = () => { 
    clearInterval (inter) 
}
// clear interval   to stop  set interval.  

// roll the dice, iski practice. stop after 10 sec, 







