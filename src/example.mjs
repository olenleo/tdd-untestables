export function sum(a, b) {
  return a + b;
}

/*
  Time-based testing is difficult.
*/
export function now() {
  return new Date();
}


export function randomArray() {
  let arr = []
  for (let i =0; i < 100; i++) {
    arr.push(Math.random())
  }
  return arr;
}