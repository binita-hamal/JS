// YOUR CODE BELOW

function mySlice(array,startIdx,endIdx){
    let newStr = [];
    if(startIdx ===undefined && endIdx === undefined){
        return array;
    }
    else if(endIdx===undefined){
        for(let i=startIdx; i<array.length; i++){
            newStr.push(array[i]);
        }
    }
    else{
        for(let i=startIdx; i<endIdx; i++){
            newStr.push(array[i]);
        }
    }
    return newStr;


}

let a=mySlice([1, 2, 3], 1, 2) // => [2]
console.log(a);

let b = mySlice([1, 2, 3], 1) // => [2, 3]
console.log(b);

let c = mySlice([1, 2, 3]) // => [1, 2, 3]
console.log(c);