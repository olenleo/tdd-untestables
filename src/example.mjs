import { doesNotReject } from 'assert';
import fs from 'fs'
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
 * Function returns an array with randomly generated values between 1 and 10.
 * @returns Array[99] of integers [1-10]
 */
export function randomArray() {
  let arr = []
  for (let i =0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1)
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
    return this.id + " : " + this.name
  }
  }

export function writeStringToFile( filename, string ) {
  fs.writeFileSync(filename, string);
}

export function readFileContents(filename) {
  return fs.readFileSync(filename).toString() ;
}

export function removeFile( filename ) {
  fs.unlink(filename, (err) => {
    if (err) {throw err;}
  })
}
  
  