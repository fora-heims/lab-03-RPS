// import functions and grab DOM elements
import { doesUserWin } from './utili.js';
import { compThrow } from './get-random-throw.js';

const play = document.getElementById('play-button');
const reset = document.getElementById('reset-button');
const message = document.getElementById('message');
const resetCount = document.getElementById('reset-count');
const win = document.getElementById('wins-cell');
const lose = document.getElementById('losses-cell');
const draw = document.getElementById('draws-cell');

// initialize global state
let wins = 0;
let losses = 0;
let draws = 0;
let resets = 0;

// set event listeners 
play.addEventListener('click', () => {
    // get user input
    let userChoice = document.querySelector('input[type=radio]:checked').value;
    // get computer throw function
    let compChoice = compThrow();
    // use user input to update state
    let compare = doesUserWin(userChoice, compChoice);
    if (compare === 'draw') {
        // update state 
        draws++;
        // update DOM to reflect the new state
        draw.textContent = draws;
        message.textContent = 'It\'s a draw.';
    } else if (compare === 'win') {
        // update state 
        wins++;
        // update DOM to reflect the new state
        win.textContent = wins;
        message.textContent = 'You win!';
    } else if (compare === 'lose') {
        // update state
        losses++;
        // update DOM to reflect the new state
        lose.textContent = losses;
        message.textContent = 'You lose.';
    }
});

// set event listeners
reset.addEventListener('click', () => {
    // update state 
    resets++;
    wins = 0;
    losses = 0;
    draws = 0;
    // update DOM to reflect the new state
    win.textContent = wins;
    lose.textContent = losses;
    draw.textContent = draws;
    resetCount.textContent = resets;
});