const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

describe("#middle", () => {
  it("return [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("return [2] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

assertArraysEqual(middle([1]),[])
