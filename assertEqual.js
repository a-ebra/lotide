const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};


assertEqual("Chicken", "Chicken")
assertEqual("Chicken", "Duck");
assertEqual(4, 4);

module.exports = assertEqual; 

