const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};


const middle = function(array) {
  let output = [];
  let middle= Math.floor(array.length/2);
  if(array.length === 1|| array.length ===2){
    return output;
  }
  else if (array.length % 2 === 1){
    output.push(array[middle]);
  }
  else if(array.length % 2 === 0){
    output.push(array[middle -1]);
    output.push(array[middle]);
  }
  return output
}

module.exports = middle;