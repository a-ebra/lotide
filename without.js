const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i=0; i< arr1.length; i++){
      if (arr1[i] !== arr2[i]){
        return false
      }
  }
  return true
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed:${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed:${actual} !== ${expected}`);
  }
}; 

const without = function(source,itemsToRemove){
  let arr = [];
  for(let i = 0; i < source.length;i++){
    let foundMatch = false;

    for( let j = 0; j <itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]){
        foundMatch = true;
      }
    }

    if (!foundMatch) {
      arr.push(source[i])
    }
  } 
  return arr 
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))
