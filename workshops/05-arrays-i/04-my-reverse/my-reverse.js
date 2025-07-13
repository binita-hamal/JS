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

let r = myReverse([1, 2, 3]);  
let a = myReverse([1,22,33,45,6,5])
let s = myReverse(['first', 'second', 'third']);
console.log(r);
console.log(a);
console.log(s)