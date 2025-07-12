
function reverseArray(array) {
    debugger;
  for (let i = 0; i < array.length/2; i++) {
    let temp = array[i];
    let j = array.length - 1 - i;
    array[i] = array[j];
    array[j] = temp;
  }
    return array;
}

reverseArray([1,2,3,4]);


