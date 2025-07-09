let counter = 0;

function incrementalChange(num){
    counter = counter + num;
    return counter;
}

let c1 = incrementalChange(2);
console.log(c1);

let a=incrementalChange(2); // => 2
console.log(a);
let c =incrementalChange(6); // => 8
console.log(c)



