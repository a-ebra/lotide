const eqObjects = function (object1, object2) {
  // variables for keys of each object
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let result = true

  if (key1 !== key2) {
    return false
  } 
  return result
};

const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc)