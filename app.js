// import functions and grab DOM elements
import { doesUserWin } from './utili.js';

const rock = document.getElementById('rock-radio');
const scissors = document.getElementById('scissors-radio');
const paper = document.getElementById('paper-radio');
const play = document.getElementById('play-button');
const reset = document.getElementById('reset-button');
const message = document.getElementById('message');
const resetCount = document.getElementById('reset-button');
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
  let userChoice = document.querySelector('input[type=radio]:checked');
});

reset.addEventListener('click', () => {

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
