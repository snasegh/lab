//Game settings
const gamePattern = [];
let userClickedPattern = [];
let gameHasStarted = false;
let level = 0;
let clickCounter = 0;
let randomChosenColour;
const buttons = document.querySelectorAll('.btn');
const numberOfButtons = document.querySelectorAll('.btn').length;
const buttonColours = ["red", "blue", "green", "yellow"];

// Updates header logic
let header = document.getElementById('level-title');
let gameOverTitle = document.getElementById('game-over-title');
function updateHeader() {
    header.innerHTML = "Level " + level;
}


//Identifies which button was pressed and checks it against the pattern Simon has chosen
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        const userChosenColour = buttons[i].id;
        userClickedPattern.push(userChosenColour);
        console.log("You clicked the button " + userChosenColour);
        console.log("The current user clicked colors are " + userClickedPattern);
        console.log("Simon has chosen the colors " + gamePattern);
        playSound(userChosenColour);
        buttonAnimation(userChosenColour);
        checkAnswer();
        clickCounter = clickCounter + 1;

        if (JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)) {
            setTimeout(function () {
                nextRound();
            },500);
        }
    });  

}

//Logic to start the game
document.addEventListener("keypress", function() {
    if (gameHasStarted == false) {
        console.log("The game has now started");
        gameHasStarted = true;
        console.log("Game state = " + gameHasStarted);
        nextRound();
    }
 });


 //Goes to the next game level
function nextRound() {
    level = level + 1;
    console.log("Current level is " + level);
    updateHeader();
    randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
    buttonAnimation(randomChosenColour);
    clickCounter = 0;
    gameOverTitle.style.opacity = "0"
    
    if (userClickedPattern != []) {
        userClickedPattern = [];   
    }
    console.log("-------------A new sequence has started-------------");
}

function checkAnswer() {

    //Debug information
    console.log("you have clicked " + clickCounter + " times");
    console.log("The current game pattern color should be " + gamePattern[clickCounter]);
    console.log(userClickedPattern[clickCounter]);
    
    if (gamePattern[clickCounter] === userClickedPattern[clickCounter]) {
        console.log("Sequence is correct so far");
    } else {
        console.log("You failed");
        gameHasStarted = false;
        level = 0;
        clickCounter = 0;
        randomChosenColour;
        gamePattern.splice(0, gamePattern.length);
        header.innerHTML = "Press any Key to Start";
        gameOverTitle.style.opacity = "1";
        
    }
}

function buttonAnimation(colour) {

    //Activates flash
    let flash = document.getElementById(colour);
    let activateFlash = flash.classList;
    activateFlash.add("pressed");
    setTimeout(function () {
        activateFlash.remove("pressed");
    },200);

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