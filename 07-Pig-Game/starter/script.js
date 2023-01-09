'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

//Storing large scores in an array
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Creating a state for the game as a variable
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Toggle both of the elements at the same time will ensure that it's only ever on one as the player--active is only associated with player0 in html as a class.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      // current0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next Player - now using the function switchPlayer
      switchPlayer();
    }
    //Using a ternary operator to reassign the active player. This allows us to switch from player 0 to player 1.
  }
});

//Holding the Score - My Attempt (it's not adding the previous currentScore with the new ones)
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold button');
    //Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log(currentScore);
    //check if player's score is >= 100

    //Finish the game
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector.classList.remove('player--active');
    } else {
      //Switch to the next player
      switchPlayer();
    }
  }
});
