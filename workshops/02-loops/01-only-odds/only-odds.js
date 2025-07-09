// YOUR CODE BELOW

function onlyOdds(num){
    let sum =0;
    if(num >0){
        
        for(let i=1; i<=num; i=i+2){
            sum = sum + i;
        }
    }
    else{
        return 0;
    }

    return sum;
}

let re=onlyOdds(6); // => 9 (5 + 3 + 1)
let re1 = onlyOdds(3)
console.log(re)
console.log(re1)
let neg = onlyOdds(-1)
console.log(neg)