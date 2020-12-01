const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`);
  }
};

const countLetters = function (words) {
  string = words.split(' ').join('');
  let counter = {};
  for (const letter of string){
    if (counter[letter]) {
      counter[letter] += 1; 
    } else {
      counter[letter] = 1;
    }
  } 
  return counter; 
}; 

console.log(countLetters("lighthouse in the house"));