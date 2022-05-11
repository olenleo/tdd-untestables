import { expect } from "chai";
import { sum, now } from "../src/example.mjs";

describe("Example test fixture", () => {
  it("Example test", () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
/*
  Faulty test: expect(now()).to.equal(new Date())
*/
describe("Clock based tests:", () => {
  it("now() returns the correct date", () => {
    expect(now()).to.equal(new Date())
  });
});
