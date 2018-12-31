var assert = require("assert");
var { IsUsingNetlify } = require("../index");

describe("API", function() {
  describe("IsUsingNetlify(url)", function() {
    it("should be true", function() {
      const actual = IsUsingNetlify("https://jamstack.xdp.no/");
      assert.equal(true, actual);
    });
    it("should be false", function() {
      const actual = IsUsingNetlify("https://blog.alemayhu.com/");
      assert.equal(false, actual);
    });
  });
});
