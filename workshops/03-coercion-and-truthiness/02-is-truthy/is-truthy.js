// YOUR CODE BELOW
function isTruthy(a){
    if(a){
        return true;
    }
    else{
        return `The ${a} value is falsey`;
    }
}


isTruthy('I yearn for truth'); // => true
isTruthy(null); // => The null value is falsey
isTruthy(undefined)
isTruthy(-1)