// YOUR CODE BELOW


function removeColumns(array,num){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<num; j++){
            array[i].pop();
        }   
    }
    return array;
}
console.log(removeColumns([[1, 2, 3],
    [1, 2, 3],
     [1, 2, 3],
     [1, 2, 3]], 2));