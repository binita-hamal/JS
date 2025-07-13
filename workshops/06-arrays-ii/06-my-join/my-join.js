// YOUR CODE BELOW

function myJoin(arr, separator) {
  debugger;
  let string = "";

  if (separator === undefined) {
    separator = ",";
  }
  for (let i = 0; i < arr.length; i++) {
    if(i===arr.length-1){
      separator='';
    }

    if (arr[i] === undefined || arr[i]===null) {
      arr[i] = "";
      string = string + arr[i] + separator;
    } else {
      string = string + arr[i] + separator;
    }
  }
  return string;
}
myJoin([null, 'came, ', 'saw, ', 'conquered.'], 'I ');