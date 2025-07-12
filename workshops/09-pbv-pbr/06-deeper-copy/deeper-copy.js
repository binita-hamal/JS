// YOUR CODE BELOW
let myArray = [1, [2, 3]];
function deeperCopy(array) {
  let parent = [];
  for (let i = 0; i < array.length; i++) {
    // 1

    if (Array.isArray(array[i])) {
      let child = [];
      for (let j = 0; j < array[i].length; j++) {
        child.push(array[i][j]);
      }
      parent.push(child);
    } 


    else {
      parent.push(array[i]);
    }

    
  }
  return parent;
}
