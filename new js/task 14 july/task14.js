
// let handler = (  ) => { 

//     document.querySelector('#body')

// } 

let red = document.querySelector('#red')
let green = document.querySelector('#green')
let yellow = document.querySelector('#yellow')
let blue = document.querySelector('#blue')

let head = document.querySelector('#head')

red.addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = "red";
    head.innerHTML = "red";
})

green.addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = "green";
    head.innerHTML = "green";
})

yellow.addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = "yellow";
    head.innerHTML = "yellow";
})

blue.addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = "blue";
    head.innerHTML = "blue";
})

// counter 

let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let head2 = document.querySelector('#head2');
let count = 0;

increase.addEventListener('click', function () {

        count++;
        head2.innerHTML = count;

        if (count % 2 == 0 && count > 0) {
            head2.style.color = "red";
        }
        else {
            head2.style.color = "blue";
        }
    

})

decrease.addEventListener('click', function () {

        count--;
        head2.innerHTML = count;

        if (count % 2 == 0 && count > 0) {
            head2.style.color = "red";
        }
        else {
            head2.style.color = "blue";
        }
    

})
