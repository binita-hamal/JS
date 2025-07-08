// YOUR CODE BELOW
function everyWhichWay(first,second,third){
    if((first + second) === third){
        return 'sum'
    }
    else if((first - second) === third){
        return "difference"
    }
    else if((first * second) === third){
        return "product"
    }
    else if((first / second) === third){
        return "fraction"
    }
    else{
        return null
    }
   
}

console.log(everyWhichWay(10, 20, 30)); // => sum

console.log(everyWhichWay(50, 20, 30)); // => difference

console.log(everyWhichWay(4, 4, 16)); // => product

console.log(everyWhichWay(100, 10, 10)); // => fraction

console.log(everyWhichWay(1, 1000, 50)); // => null
