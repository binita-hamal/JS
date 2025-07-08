// YOUR CODE BELOW

function doYouPlayTheTheremin(string){
    if(string[0] === 's' || string[0] === 'S'){
        return true
    }
    else{
        return false;
    }

}

console.log(doYouPlayTheTheremin('Griffin')); // => false
console.log(doYouPlayTheTheremin('Scott')); // => true
console.log(doYouPlayTheTheremin('bini')); // => false