// YOUR CODE BELOW


function veryOdd(array){
    let onlyOddArray=[];
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 !== 0){
            onlyOddArray.push(array[i]);
        }
    }
    return onlyOddArray;
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); //
