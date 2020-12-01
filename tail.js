const assertEqual = require('./assertEqual')

const tail = function (array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words))
assertEqual(words.length, 3); 
const word = [];
console.log(tail(word));