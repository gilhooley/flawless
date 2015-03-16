'use strict';

require('j-shellscript').globalize();

var R        = require('ramda');
var inquirer = require('inquirer');

var questions = ['These diamonds?', 'My diamonds?', 'This rock?', 'My rock?'];

var gems = R.map(function(q) {
  return {
    type: 'input',
    name: q,
    message: q,
    default: 'FLAWLESS'
  };
}, questions);

var allFlawless = R.all(R.or(R.eq('FLAWLESS'), R.eq('flawless')));

module.exports = function quiz() {
  inquirer.prompt(gems, function(answers) {
    if (allFlawless(R.values(answers))) {
      shell('say -v vicki I woke up like this. I woke up like this');
      shell('echo You flawless')
    } else {
      shell('echo Try again!');
      shell('say -v vicki Bow down, bitches');
      // Give them up to 4000 chances to get it right (stack limit, don't feel like trampolining)
      quiz();
    }
  });
};
