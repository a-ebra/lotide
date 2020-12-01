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

const map = function(array, value) {
  const res = [];

  for (let item of array) {
    res.push(value(item));
  }
  return res;
}

const res1 = map(words, word => word[0]);
console.log(res1);