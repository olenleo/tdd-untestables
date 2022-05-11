import { expect } from "chai";
import { sum, now, randomArray, SingletonObject } from "../src/example.mjs";

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

describe("Randomness based tests:", () => {
  it("Two returned arrays are unique ", () => {
    let arr1 = randomArray();
    let arr2 = randomArray();
    console.log(arr1)
    expect(arr1).to.not.equal(arr2);
  })

  it("Several ")

});


/*
  Singleton testing is problematic due to the requirement of 
  the singleton being instanciated; 

*/
describe("Singleton based tests:", () => {
  it("Singleton exists:", () => {
    let s = new SingletonObject(1, "Object A")
    console.log(s.toString())
    expect(s.toString()).to.equal("1 : Object A")
  });

  it("New singletons equal the first:", () => {
    let s = new SingletonObject(1, "Object A")
    let s2 = new SingletonObject(2, "Object B")
    console.log(s.toString())
    expect(s).to.equal(s2)
    })
    


});