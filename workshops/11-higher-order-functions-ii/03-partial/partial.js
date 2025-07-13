// YOUR CODE BELOW

function partial(func,a){
    return function(b){
        return func(a,b);
    }
}