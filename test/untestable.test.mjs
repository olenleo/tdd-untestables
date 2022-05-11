import { expect } from "chai";
import { sum, now, randomArray, SingletonObject, writeStringToFile, readFileContents, removeFile } from "../src/example.mjs";
import fs from "fs"
import { assert } from "console";


/*
  Faulty test: expect(now()).to.equal(new Date()).
  Refactor with custom equals()-method perhaps?
*/
describe("Clock based tests:", () => {
  it("now() returns the correct date", () => {
    console.log(typeof new Date())
    console.log(now() instanceof Date)
    expect(now()).to.equal(new Date())
  });
});

describe("Randomness based tests:", () => {
  it("Two returned arrays are unique ", () => {
    let arr1 = randomArray();
    let arr2 = randomArray();
    expect(arr1).to.not.equal(arr2);
  })

  it("Several lists are not identical", () => {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < 20; i++) {
      arr1.push(randomArray());
      arr2.push[randomArray()];
    }
    expect(arr1).to.not.equal(arr2);
  })

  /**
   * The scope of this test should be calibrated according to the software requirements.
   */
  it("Randomised lists show enough variation", () => {
    const testcase1 = [
      4, 6,  6,  9,  8, 1, 10, 9,  2, 4, 10, 5,
     10, 7,  6,  1,  5, 9,  4, 5, 10, 4, 10, 8,
      3, 7,  6, 10, 10, 3,  6, 3,  4, 9,  6, 8,
      5, 5, 10,  9, 10, 2,  4, 6,  8, 5,  9, 1,
      5, 2,  5,  8,  7, 7,  8, 5, 10, 9,  4, 7,
      4, 3,  8,  9, 10, 9, 10, 3,  6, 2, 10, 8,
      8, 8,  6,  4,  8, 2,  6, 3,  5, 2,  7, 6,
      9, 4,  7,  4,  4, 7,  3, 7,  4, 7,  1, 5,
     10, 6,  1,  4
    ]
    const testcase2 = [
    5,  3,  5, 2,  8,  9,  1,  5,  6,  4, 5, 10,
   10,  5,  5, 8,  9, 10,  4,  7, 10, 10, 7,  9,
    1,  8,  2, 6,  6,  9,  5,  3,  9, 10, 2,  6,
    4,  9,  9, 6,  9,  8,  6, 10,  6,  3, 9,  6,
    5, 10,  4, 3,  5,  2,  1,  8, 10,  2, 7,  2,
    6,  7,  8, 4, 10, 10, 10,  3,  7,  4, 4,  9,
    5,  1, 10, 8,  3, 10,  8, 10,  1,  8, 5,  2,
   10,  5,  1, 7,  6,  5,  6,  5,  1,  7, 9,  2,
    3,  7,  8, 9
    ]
    // Curious about the test syntax here
    for (let i = 0; i <  1000; i++) {
      expect(testcase1 || testcase2).to.not.equal(randomArray())
    }

 
   
  })
});


/*
  Singleton testing is problematic due to the requirement of 
  the singleton being instanciated; 
  writing such a test and corresponding function seems quite complicated 
  in the scope of this exercise.

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
    });
    
});
describe("File system based tests:", () => {
  // File system error!
  
  
  it("Function can write a file", () => {
    writeStringToFile("testfile", "Hello Filesystem!")
    removeFile("testfile")
  });

  it("File can be read", () => {
    writeStringToFile("testfile", "Hello Filesystem!")
    expect(readFileContents("testfile")).to.equal("Hello Filesystem!")
    removeFile("testfile")
  })

  
});