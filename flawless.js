// #!/usr/bin/env node
'use strict';

require('shellscript').globalize();
var inquirer = require('inquirer');

var Question = function(name, message){
  this.type = 'input';
  this.name = name;
  this.message = message;
  this.default = 'FLAWLESS';
}

var qTheseDiamonds = new Question('these diamonds','These diamonds?');
var qMyDiamonds = new Question('my diamonds','My diamonds?');
var qThisRock = new Question('this rock','This rock?');
var qMyRock = new Question('my rock','My rock?');

var gems = [qTheseDiamonds, qMyDiamonds, qThisRock, qMyRock];

var win = function(){
  shell('say -v vicki I woke up like this. I woke up like this');
};

var lose = function(){
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
      win();
    } else {
      lose();
    }
  })

}();
