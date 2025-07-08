// YOUR CODE BELOW

function maxOfThree(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    else{
        return c;
    }
}


console.log(maxOfThree(5, 4, 10)); // => 10

console.log(maxOfThree(7, 7, 4)); // => 7

console.log(maxOfThree(11, 7, 11)); // => 11