// YOUR CODE BELOW

function timesTable(number){//let number =9
    return function(a){
            return number*a;
        }
    }


let ninesTable = timesTable(9); //returned function
let product =ninesTable(8)    // let a =8,
console.log(product);