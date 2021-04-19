var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

function rollDices() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute("src", "images/dice" + randomNumber1 +".png");
    img2.setAttribute("src", "images/dice" + randomNumber2 +".png");
    var header = document.querySelector(".header");

    if (randomNumber1 > randomNumber2) {
        header.innerHTML = "🚩 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        header.innerHTML = "Player 2 wins! 🚩";
    } else {
        header.innerHTML = "Draw!";
    }
}



document.onLoad(rollDices());