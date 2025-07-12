// YOUR CODE BELOW

function dogBreeder(a, b) {
  let obj = {};
  let name = "Steve";
  let age = 10;

  if (typeof a === "string") {
    name = a;
    if (typeof b === "number") {
      age = b;
    }
  } else if (typeof a === "number") {
    age = a;
  }
  return {
    name: name,
    age: age,
  };
}
let d = dogBreeder("Sam", 12); // => {name: 'Sam', age: 12}
console.log(d);

let e = dogBreeder("bini"); // => {name:'Steve', age: 15}
console.log(e);
