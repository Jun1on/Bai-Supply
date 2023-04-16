const { expect } = require("chai");

describe("TwapGetter", function () {
  let TwapGetter;
  let twapGetter;

  before(async function () {
    TwapGetter = await ethers.getContractFactory("TwapGetter");
    twapGetter = await TwapGetter.deploy();
    await twapGetter.deployed();
  });

  it("Should return the 30-minute TWAP price of BCT", async function () {
    const price = await twapGetter.getPrice();
    console.log("Price of BCT: " + price)
    expect(price).to.be.above(0);
  });
});
