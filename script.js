'use strict';
// NOTES Secret number calculation and display.
let secretNumber = Math.trunc(Math.random() * 200);
// console.log(number);

// NOTES Score display.
let score = 20;
document.querySelector('.score').textContent = score;

// NOTES Highscore Creation and Display.
let highscore = 0;
document.querySelector('.highscore').textContent = highscore;

// NOTES Function creation
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // NOTES When there is no inout
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '🔞 Please enter a number 🔞';
    displayMessage('🔞 Please enter a number 🔞');

    // NOTES When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!! 🎉';
    displayMessage('🎉 Correct Number!! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // NOTES When guess is wrong
  } else if (guess !== secretNumber) {
    score -= 1;
    document.querySelector('.score').textContent = score;

    if (score === 0) {
      // document.querySelector('.message').textContent =
      // '😭 You have lost the game 😭';
      displayMessage('😭 You have lost the game 😭');
    } else {
      displayMessage(
        guess > secretNumber
          ? '😑 Guess is too high ⬆️'
          : '😑 Guess is too low ⬇️'
      );
      // document.querySelector('.message').textContent =
      //   guess > secretNumber
      //     ? '😑 Guess is too high ⬆️'
      //     : '😑 Guess is too low ⬇️';
    }
  }
});

// Coding Challenge 1
// NOTES Again Button Functionality

document.querySelector('.again').addEventListener('click', function () {
  highscore = document.querySelector('.highscore').textContent;
  document.querySelector('.highscore').textContent = highscore;

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';

  secretNumber = Math.trunc(Math.random() * 21);
});
