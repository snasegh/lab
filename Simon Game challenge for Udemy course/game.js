//Game constants
const gamePattern = [];
let userClickedPattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gameHasStarted = false;
let level = 0;

function updateHeader() {
    header.innerHTML = "Level " + level;
}

let header = document.getElementById('level-title');
let randomChosenColour;

const blueButton = document.getElementById('blue');
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const yellowButton = document.getElementById('yellow');
const buttons = document.querySelectorAll('.btn');
const numberOfButtons = document.querySelectorAll('.btn').length;


for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    const userChosenColour = buttons[i].id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    buttonAnimation(userChosenColour);
    nextSequence();
    checkAnswer(userClickedPattern[i]);

    console.log(userChosenColour);
    console.log(userClickedPattern);

    });  

}

document.addEventListener("keypress", function() {
    if (gameHasStarted == false) {
        nextSequence();
        gameHasStarted = true;
        console.log("Game state = " + gameHasStarted);
    }
 });

function nextSequence() {
    level = level + 1;
    console.log("Current level is " + level);
    updateHeader();
    randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    
    if (userClickedPattern != []) {
        userClickedPattern = [];   
    }
}

function checkAnswer(currentLevel) {
    console.log("The current level is " + currentLevel);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Alright! The color you selected mathed the game pattern array");
    } else {
        console.log("Oopps.. The color you selected did not match the game pattern array");
    }
}


function buttonAnimation(colour) {

    //Activates flash
    let flash = document.getElementById(colour);
    let activateFlash = flash.classList;
    activateFlash.add("pressed");
    setTimeout(function () {
        activateFlash.remove("pressed");
    },100);

}

function playSound(colour) {
    //Plays a sound based on the colour that is active
    switch (colour) {
        case "red":
            const redSound = new Audio('sounds/red.mp3');
            redSound.play();
            break;

        case "blue":
            const blueSound = new Audio('sounds/blue.mp3');
            blueSound.play();
            break;

        case "green": 
            const greenSound = new Audio('sounds/green.mp3');
            greenSound.play();
            break;

        case "yellow":
            const yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();
            break;
    
        default:
            const wrongSound = new Audio('sounds/wrong.mp3');
            wrongSound.play();
            break;
    }
}