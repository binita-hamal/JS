// YOUR CODE BELOW
// bacteriaTime(1, 8); // => 60
function bacteriaTime(currentNum,targetNum){
    let minute = 0;

    for(let i=currentNum; i<=targetNum; i=i*2){
        minute = minute + 20
    }
    return minute
}
let b = bacteriaTime(1, 8); // => 60
let c = bacteriaTime(1,4);
console.log(b)
console.log(c);