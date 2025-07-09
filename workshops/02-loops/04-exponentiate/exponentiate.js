// YOUR CODE BELOW
//2**4 = 2*2*2*2
function exponentiate(base,number){
    let result = 1;
    for(let i=1; i<=number; i++){
        result = result*base;
    }
    return result;
}

let r = exponentiate(2,2)
let r1 = exponentiate(3, 4)    // => 81
console.log(r)
console.log(r1)