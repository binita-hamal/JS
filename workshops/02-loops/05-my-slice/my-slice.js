// YOUR CODE BELOW

function mySlice(originalString,startIdx=0,endIdx){
    let newString = ""
    if(endIdx === undefined && startIdx !== undefined){
        for(let i=startIdx; i<originalString.length; i++){
            newString = newString + originalString[i]
        }
    }
    else if(startIdx !==undefined && endIdx !== undefined){
        for(let i=startIdx; i<endIdx; i++){
            newString = newString + originalString[i]
        }

    }
    else{
        newString = originalString;
    }

    return newString;
    
}

let a =mySlice('slice and dice', 2)    // => ice and dice
console.log(a)
let b = mySlice('slice and dice', 2, 5)    // => ice
console.log(b)

let c = mySlice('slice and dice')    // => slice and dice
console.log(c);