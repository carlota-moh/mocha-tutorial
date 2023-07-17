const { expect } = require("chai");

describe("Color Code Converted API", () => {
  describe("RGB to Hex conversion", () => {
    const url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", () => {
      fetch(url).then((res) => expect(res.statusCode).to.equal(200));
    });

    it("returns the color in hex", () => {
        fetch(url).then((res) => expect(res.body).to.equal("ffffff"));
    });
  });

  describe("Hex to RGB conversion", () => {
    const url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", () => {
        fetch(url).then((res) => expect(res.statusCode).to.equal("[0,255,0]"));
    });

    it("returns the color in hex", () => {});
  });
});
