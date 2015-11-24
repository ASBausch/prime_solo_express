//function that converts number to currency
var currencyConvert = function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

};

//exports into a usable module
module.exports = currencyConvert;
