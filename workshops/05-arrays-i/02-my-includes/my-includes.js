function myIncludes(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true; //before used return;
    }
  }
  return false;
}

let a = myIncludes([10, 20, 30], 20); // => true
console.log(a); //true

let b = myIncludes(["apples", "bananas", "citrus"], "pears"); // => false
console.log(b); //false

let lossley = myIncludes([5, 10, 15], "15");
console.log(lossley); //false
