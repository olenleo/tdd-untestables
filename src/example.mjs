export function sum(a, b) {
  return a + b;
}

/*
  Time-based testing is difficult.
*/
export function now() {
  return new Date();
}

/**
 * Function returns an array with randomly generated values between 0 and 1
 * @returns Array[99] of doubles [0-1]
 */
export function randomArray() {
  let arr = []
  for (let i =0; i < 100; i++) {
    arr.push(Math.random())
  }
  return arr;
}


let checkInstance = null;
export class SingletonObject {
    constructor(id, name) {
      if (!checkInstance) {
        this.id=id;
        this.name=name;
        checkInstance=this; }      
      else { return checkInstance;}
    }
  toString() {
    //return this.id + " : " + this.name
  }
  }

