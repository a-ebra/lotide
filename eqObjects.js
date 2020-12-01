const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};

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


//function for eqObjects
// goal: take in two objects, returns true or false if they are a perfect match 
// i.e keys have the same values
const eqObjects = function (object1, object2) {
  // variables for keys of each object
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  let result = true

  if (key1 !== key2) {
    return false
  } 
  return result
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false