// Create variables for the game state
let player1Score = 0
let player2Score = 0
let playerTurn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const tossBtn = document.getElementById("tossBtn")

tossBtn.addEventListener('click', function() {
    const randCoin = Math.floor(Math.random() * 2) + 1;
   console.log(randCoin);
    if(randCoin === 1) {
        playerTurn = true;  
        message.textContent = "Player 1 won first Trun" 
        player1Dice.classList.add("active") 
    }else if(randCoin === 2){
        message.textContent = "Player 2 Won first Trun"
        playerTurn = false;
        player2Dice.classList.add("active") 
    }    
    tossBtn.style.display = "none";
    rollBtn.style.display = "block";
})

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (playerTurn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    playerTurn = !playerTurn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    playerTurn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Spin the Coin"
    resetBtn.style.display = "none"
    rollBtn.style.display = "none"
    tossBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.remove("active")
}
