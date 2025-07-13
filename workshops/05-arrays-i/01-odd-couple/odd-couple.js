// YOUR CODE BELOW

function oddCouple(arr){
    let newArr = [];
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 ===1){
            newArr.push(arr[i])
            count = count + 1;
            if(count ===2){
                break;
            }
        }
    }
    return newArr;
    
}



