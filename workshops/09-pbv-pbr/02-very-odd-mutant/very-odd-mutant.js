// YOUR CODE BELOW

function veryOddMutant(array){
    let count =0;
    for(let i=0; i<array.length; i++){
        if(array[i] %2 ===0 ){
            array[i] = "normie";
            count = count + 1;
        }
    }
    return count;
}

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
// let countRemoved = veryOddMutant(allTheNums);

// console.log(allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];
// console.log('countRemoved:', count);
// // 4