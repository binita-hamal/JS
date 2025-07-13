// YOUR CODE BELOW

function evenAndOdd(arr){
    let evenArr=[];
    let oddArr = [];
    let finalArr=[]

    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2===0){
            evenArr.push(arr[i])
        }
        else{
            oddArr.push(arr[i])
        }
    }
    finalArr.push(evenArr);
    finalArr.push(oddArr)
    return finalArr;
}

let a =evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]
console.log(a);