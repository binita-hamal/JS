// YOUR CODE BELOW
  // => [3, 2, 1]
//no reverse function
function myReverse(arr){
    let reverseArr =[];
    for(let i =arr.length-1; i>=0; i--){
        reverseArr.push(arr[i]);
    }

    return reverseArr;

}
