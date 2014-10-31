#!/usr/bin/env node
'use strict';

var shellscript = require('shellscript').globalize();

var check = function(){
  shell('echo FLAWLESS');
}

module.exports = function(){
  check();
}();