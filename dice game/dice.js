//  

let player1;
let player2;

function editNames() {
    player1 = prompt("change player1 name")
    player2 = prompt("change player2 name")

    if (player1.length < 1 || player2.length < 1) {
        alert('please enter valid name')
        return;
    }
    document.querySelector(".player1").innerHTML = player1;

    document.querySelector(".player2").innerHTML = player2;
}


function rollTheDice() {

    let diceNum1 = document.querySelector('.img1');
    let diceNum2 = document.querySelector('.img2');

    diceNum1.setAttribute("src", "diceroll.gif");
    diceNum2.setAttribute("src", "diceroll.gif");

    let result = document.querySelector('h1')


    setTimeout(() => {
        let random1 = parseInt((Math.random() * 6) + 1);
        let random2 = parseInt((Math.random() * 6) + 1);

        diceNum1.setAttribute('src', 'dice' + random1 + '.png');
        diceNum2.setAttribute('src', 'dice' + random2 + '.png');

        // determine winner 
        if (random1 === random2) {
            result.innerHTML = 'draw!';
        }
        else if (random1 < random2) {
            result.innerHTML = (player2 + " wins !");
        }
        else {
            result.innerHTML = (player1 + " wins !");
        }

    }, 2000)

}











