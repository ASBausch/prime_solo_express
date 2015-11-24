//creates a random module
var randomNumber = function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
};

//exports this to a usable module
module.exports = randomNumber;
