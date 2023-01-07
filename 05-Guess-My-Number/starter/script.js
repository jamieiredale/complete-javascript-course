'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🔥';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//this is how we set the secret number to be a full number rather than decimal and limit it to 20.
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//We use let here instead of const as this variable will change.
let score = 20;

//How I did the challenge (the again button)
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.message').textContent = 'Start guessing....';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').textContent = '?';
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
// });

//How the instructor does it

//Annonymous function as it doesnt have a name
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When No Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 🐣';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You got it right 👍';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //When input is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Its too high 🍾';
      // score = score - 1; can write shorthand as score--
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
    }

    //When Input is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Its too low 👩‍🏫';
      // score = score - 1; can write shorthand as score--
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😭';
      document.querySelector('.score').textContent = 0;
      score--;
    }
    document.querySelector('.score').textContent = score;
  }
});
