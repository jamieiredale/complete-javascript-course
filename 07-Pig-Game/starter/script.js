'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//selecting ID's instead of classes
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
//Adding the hidden class to the Dice class
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the dice
  diceEl.classList.remove('hidden');
  //Dyanmically loading one of the images based on the random number rolled
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  //3. Check for rolled 1. If true, switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
  }
});
