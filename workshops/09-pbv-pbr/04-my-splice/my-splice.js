function mySplice(array, startIdx, deleteCount, item) {
  debugger;
  let removeItem = [];
  let keepItem = [];

  //let keep the items before the start index

  for (let i = 0; i < startIdx; i++) {
    keepItem.push(array[i]); //keep =[1];
  }

  if (item !== undefined) {
    keepItem.push(item); //keep=[1,'item'];
  }

  //keep removed element
  for (let j = startIdx; j < startIdx + deleteCount; j++) {
    removeItem.push(array[j]); //remove =[2];
  }

  //push remaining elements
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    keepItem.push(array[i]);
  }
let len = array.length;
  for (let k = 0; k < len; k++) {
    array.pop();
  }

  for (let m = 0; m < keepItem.length; m++) {
    array.push(keepItem[m]);
  }
  return removeItem;
}



let ourStuff = ['food', 'trash', 'clothes'];

mySplice(ourStuff, 1, 1);