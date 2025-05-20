'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const randomNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Guess a 4-digit number: ', (userInput) => {
  if (checkIsValidUserInput(userInput)) {
    getBullsAndCows(Number(userInput), randomNumber);
  }

  rl.close();
});
