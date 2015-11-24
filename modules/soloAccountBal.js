//set the modules that are needed for the function as required
var randomNumber = require('./soloRandomNum.js');
var currencyConvert = require('./soloConversion.js');

//create a new function that accepts the required modules as parameters
//be sure to fill in the random number or any other required parameters
var soloAccountBal = function() {
  return 'Account balance: \n' + currencyConvert(randomNumber(100, 1000));
};

module.exports = soloAccountBal;
