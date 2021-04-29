//Game constants
let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gameHasStarted = false;
let level = 0;

function updateHeader(level) {
    document.getElementById('level-title').innerHTML = "Level " + level;
}

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
    console.log("You clicked the button " + userChosenColour);
    console.log("The current user clicked colors are " + userClickedPattern);
    console.log("Simon has chosen the colors " + gamePattern);
    playSound(userChosenColour);
    buttonAnimation(userChosenColour);
    checkAnswer();
    nextSequence();

    });  

}

document.addEventListener("keypress", function() {
    if (gameHasStarted == false) {
        console.log("The game has now started");
        gameHasStarted = true;
        console.log("Game state = " + gameHasStarted);
        nextSequence();
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
    console.log("A new sequence has started");
    console.log("--------------------------");
}


/* 

    I'm really stuck..
    I don't know how to write the code to check if the gamePattern array
    matches the userClickedPattern array.. It seems to clear in my head,
    but I can't for whatever reason convert my thoughts into code....
    
    To whoever reads this, if I in a future commit found a solution, I got help..
    Which is probably not a bad thing (to ask for help), but my demons told me I need 
    to figure this out myself..


*/ 

function checkAnswer() {
    for (let i = 0; i < gamePattern.length; i++) {
        const element = gamePattern[i];

        if (userClickedPattern[i] == gamePattern[i]) {
            console.log("You got it right");
        } else {
            console.log("you got it wrong");
        }
        
    }
}

/* 
function checkAnswer(currentLevel) {
    console.log("The current level is " + currentLevel);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]) {
        console.log("Alright! The color you selected mathed the game pattern array");
    } else {
        console.log("Oopps.. The color you selected did not match the game pattern array");
    }
}
*/


function buttonAnimation(randomChosenColour) {
	//Activates flash on a button
	let btn = document.getElementById(randomChosenColour).classList;
	btn.add("pressed");
	setTimeout(function () {
		btn.remove("pressed");
	}, 100);
}

function playSound(colour) {
	let sound = new Audio(`sounds/${colour}.mp3`);
	sound.play();
}
