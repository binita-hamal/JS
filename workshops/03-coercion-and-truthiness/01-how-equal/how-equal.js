// YOUR CODE BELOW

function howEqual(a,b){
    if(a===b){
        return 'strictly'
    }
    else if(a==b){
        return "loosely"
    }
    else{
        return "not equal"
    }
}

let a =howEqual(0, '0'); // => loosely
console.log(a)
