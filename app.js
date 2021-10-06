// import functions and grab DOM elements
import { doesUserWin } from './utili.js';

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
const choices = ['rock', 'paper', 'scissors'];

// set event listeners 
play.addEventListener('click', () => {
    let userChoice = document.querySelector('input[type=radio]:checked').value;
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    let compare = doesUserWin(userChoice, compChoice);
    if (compare === 'draw') {
        draws++;
        draw.textContent = draws;
        message.textContent = 'It\'s a draw.';
    } else if (compare === 'win') {
        wins++;
        win.textContent = wins;
        message.textContent = 'You win!';
    } else if (compare === 'lose') {
        losses++;
        lose.textContent = losses;
        message.textContent = 'You lose.';
    }
});

reset.addEventListener('click', () => {
    resets++;
    resetCount.textContent = resets;
    wins = 0;
    losses = 0;
    draws = 0;
    win.textContent = wins;
    lose.textContent = losses;
    draw.textContent = draws;
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
