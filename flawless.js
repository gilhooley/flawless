#!/usr/bin/env node
'use strict';

var shellscript = require('shellscript').globalize();
var inquirer = require('inquirer');

var qTheseDiamonds = {
  type: 'input',
  name: 'these diamonds',
  message: 'These diamonds?',
  default: 'FLAWLESS'
};

var qMyDiamonds = {
  type: 'input',
  name: 'my diamonds',
  message: 'My diamonds?',
  default: 'FLAWLESS'
};

var qThisRock = {
  type: 'input',
  name: 'this rock',
  message: 'This rock?',
  default: 'FLAWLESS'
};

var qMyRock = {
  type: 'input',
  name: 'my rock',
  message: 'My rock?',
  default: 'FLAWLESS'
};

var gems = [qTheseDiamonds, qMyDiamonds, qThisRock, qMyRock];

var finish = function(){
  shell('say -v vicki I woke up like this. I woke up like this');
};

var fail = function(){
  shell('say -v vicki Bow down, bitches');
};

module.exports = function(){

  inquirer.prompt(gems, function( answers ) {
    if(
      (answers['these diamonds'] === 'flawless' || answers['these diamonds'] === "FLAWLESS") &&
      (answers['my diamonds'] === 'flawless' || answers['my diamonds'] === "FLAWLESS") &&
      (answers['this rock'] === 'flawless' || answers['this rock'] === "FLAWLESS") &&
      (answers['my rock'] === 'flawless' || answers['my rock'] === "FLAWLESS")
    ){
      finish();
    } else {
      fail();
    }
  })

}();
