// YOUR CODE BELOW
let count = 0;
function oddCouple(arr){
    let newArr = []
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

let a = oddCouple([1, 2,3,4,5]); // => [1, 3]
let b =oddCouple([10, 15, 20,22,3]); // => [15]
console.log(a);
console.log(b)

let c = oddCouple(2, 4, 6, 8); // => []
console.log(c);
