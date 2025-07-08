// YOUR CODE BELOW
function greeting(name){
    if(name){
    return 'Hello '+ name + "!"
    }
    else{
        return 'Hello!'
    }
}
console.log(greeting('Sadie')); // => Hello Sadie!
console.log(greeting()); // => Hello!