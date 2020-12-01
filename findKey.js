const assertEqual = function(Actual, Expected) {
  if (Actual === Expected) {
    console.log(`✅ Assertion passed: ${Actual} === ${Expected}`);
  } else { 
    console.log(`🛑 Assertion failed: ${Actual} !== ${Expected}`)
  }
};

findkey: function (object, callback) {
  const names = object.keys(object);
  for (const value of names) {
    if (callback(object[value]) === true) {
      return value;
    }
  }
};

