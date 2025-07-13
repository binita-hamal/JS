
function myUnshift(arr,a){
    let newArr  = [];
    newArr.push(a); // newArr = [1,2,3,0]

    for(let i=0; i<arr.length; i++){
        newArr[i+1] = arr[i];   //newArr[1] = arr[0]
    }
    return newArr;
}
