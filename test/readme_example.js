var assert = require("assert");

describe("README example", function() {
  it("Usage as module", function() {
    const url = "https://jamstack.xdp.no/";
    require("../index").IsUsingNetlify(url, isun => {
      assert.equal(true, isun);
    });
  });
});
