const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("true if arrays are equal", () => {
    assert.strictEqual(1, 1);
  });
  it("false if arrays not equal",() => {
    assert.strictEqual('lighthouse Labs', 'bootcamp'); 
  });
});