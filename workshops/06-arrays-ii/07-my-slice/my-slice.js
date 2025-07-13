
function mySlice(array, startIdx, endIdx) {
    debugger;
  let newStr = [];
  if (startIdx === undefined && endIdx === undefined) {
    return array;
  }
  if (startIdx < 0) {
    startIdx = array.length + startIdx;
  }
  if (endIdx < 0) {
    endIdx = array.length + endIdx;
  }
  if (endIdx === undefined) {
    for (let i = startIdx; i < array.length; i++) {
      newStr.push(array[i]);
    }
  }  
    for (let i = startIdx; i < endIdx; i++) {
      newStr.push(array[i]);
    }
  
  return newStr;
}

mySlice(['bagel', 'baguette', 'bialy', 'brioche'], 0, -1);

