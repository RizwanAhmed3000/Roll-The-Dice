// geting elements

var totalScore1 = document.querySelector('.totalScore1');
var totalScore2 = document.querySelector('.totalScore2');
var currentScore1 = document.querySelector('.currentScore1');
var currentScore2 = document.querySelector('.currentScore2');
var newGameBtn = document.querySelector('.newGameBtn');
var rollDiceBtn = document.querySelector('.rollDiceBtn');
var holdBtn = document.querySelector('.holdBtn');
var diceImg = document.querySelector('.diceImg');
var player1 = document.querySelector('.player1');
var player2 = document.querySelector('.player2');
var score; var activePlayer;

activePlayer = player1;
console.log(activePlayer.classList);

//functions
// player1 = 1;
// player2 = 2;
score = [];

// function game(){
    
// }

function rollDice(){
    var randomNumber = Math.round(Math.random() * 5 + 1);
    console.log(randomNumber)
    diceImg.classList.remove('hidden');
    diceImg.src = `assets/${randomNumber}.png`;
    if(randomNumber == 1){
        currentScore1.textContent = 0;
        playerActivation();
        nextPlayer();
    } else{
        currentScore1.textContent = +currentScore1.textContent + randomNumber;
        // score[0] = +currentScore1.textContent;
        // console.log(score);
    }
}

function holdAction(){
    totalScore1.textContent = +totalScore1.textContent + (+currentScore1.textContent);
    currentScore1.textContent = 0;
    nextPlayer();
    playerActivation();
}

function newGame(){
    location.reload();
}

function nextPlayer(){
    if(activePlayer == player1){
        activePlayer = player2;
        activePlayer.classList.add('active');
        player1.classList.remove('active');
    } else if (activePlayer == player2){
        activePlayer = player1;
        activePlayer.classList.add('active');
        player2.classList.remove('active');

    }
    playerActivation();
}

function playerActivation(){
    if(activePlayer == player1){
        activePlayer = player2;
        currentScore1 = currentScore1;
        totalScore1 = totalScore1;        
    }else if(activePlayer == player2){
        activePlayer = player1
        currentScore1 = currentScore2;
        totalScore1 = totalScore2;        
    }
}

//actions
rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdAction);
newGameBtn.addEventListener('click', newGame);