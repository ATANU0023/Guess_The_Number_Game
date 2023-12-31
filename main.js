let randomNumber = (parseInt(Math.random()*100+1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const print = document.querySelector('.print')

const p = document.createElement('p')

let preGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validate(guess);       
    })
}

function validate(guess){
    // to check wheter the user give right input or not
    if(guess<=0 || isNaN(guess) || guess>100){
        alert("Please enter a valid number")
    }
    else{
       preGuess.push(guess);
       if(numGuess===10){
        displayGuess(guess);
        displayMessage(`Game Over ! .. The random number was ${randomNumber}`);
        endGame();
       } 
       else {
        displayGuess(guess)
        checkGuess(guess)
       }
    }
}

function checkGuess(guess){
    //to check the given value and print 
    if(guess === randomNumber){
        displayMessage('You guessed it right ')
    }
    else if(guess < randomNumber){
        displayMessage('The Number is TOO low ')
    }
    else if(guess > randomNumber){
        displayMessage('The Number is TOO high ')
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `
    
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id ="newGame"> Start New Game</h2>`;
    p.style.color='green';
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener("click", function(e){
        randomNumber = (parseInt(Math.random()*100+1))
        preGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}, `;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true
    })
}
