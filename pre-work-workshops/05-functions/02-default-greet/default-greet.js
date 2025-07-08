// YOUR CODE BELOW
// function defaultGreet(firstName,lastName='Doe'){
//     return "Hi " + firstName +" "+lastName +"!"
// }

function defaultGreet(firstName,lastName){
    if(lastName === undefined){
        return 'Hi ' + firstName + ' Doe!'
    }
    else{
        return "Hi " + firstName + " " + lastName + "!"
    }
}

console.log(defaultGreet('Chaka', 'Khan')); // => 'Hi Chaka Khan!'
console.log(defaultGreet('John')); // => 'Hi John Doe!'
