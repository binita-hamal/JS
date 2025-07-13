function rotateArray(array, num) {
  let newArray = [];
  if (num > 0) {
    let start1 = array.slice(-num); //[4,5]
    let end1 = array.slice(0, -num); //[1,2,3]
    newArray = start1.concat(end1); //[4,5,1,2,3]
    return newArray;
  } else {
    let start2 = array.slice(-num); //[3,4,5]
    let end2 = array.slice(0, -num); //[1,2]
    newArray = start2.concat(end2);
    return newArray;
  }
}

//[1,2,3,4,5],-2 ==> []
let a = rotateArray([1, 2, 3, 4, 5], 1); // => [5, 1, 2, 3, 4]
console.log(a);
let b = rotateArray([1, 2, 3, 4, 5], 2); // [4,5,1,2,3]
console.log(b);

let c = rotateArray([1, 2, 3, 4, 5], -2);
console.log(c);

