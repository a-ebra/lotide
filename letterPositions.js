const eqArrays = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(let i=0; i< array1.length; i++){
      if (array1[i] !== array2[i]){
        return false
      }
  }
  return true
}

const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};


const letterPositions = function(sentence) {
  const results = {};
  let index = 0
  for (const letter of sentence) {
    if (results[letter]){
      results[letter].push(index)
    }
    else {
      results[letter] = [index]
    }
    index++;
  } console.log(results)
};

console.log(letterPositions("lighthouse in the house"));