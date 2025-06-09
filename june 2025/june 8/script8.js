//      set Interval and   clear Interval after   a while. 

function time() {

  // Start a 1-second interval
  const intervalId = setInterval(() => {
    console.log('Tick at', new Date().toLocaleTimeString());
    // Here you can update your UI or perform other actions
  }, 1000);

  // After 10 seconds, stop the interval
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped after 10 seconds');
  }, 10000);

}

let roll = document.querySelector('#btn1')
let dice1 = document.querySelector('#dice1')
let dice2 = document.querySelector('#dice2')

roll.addEventListener("click", function () {

  dice1.innerHTML = parseInt((Math.random() * 6) + 1)
  dice2.innerHTML = parseInt((Math.random() * 6) + 1)
})

//  form validation :  like password confirm check,  mail should include @ and .com,  

// mini-project___ calculator,   design calender == 13 jan 2025,  roll dice,  stop watch,   form validation,  
// to do list ,  append child, create element,  class list, 























