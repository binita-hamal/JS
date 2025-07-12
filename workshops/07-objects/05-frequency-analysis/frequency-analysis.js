// YOUR CODE BELOW
// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}

function frequencyAnalysis(string){
    let newObj ={}
    
    for(let char of string){
        if(newObj[char]){
            newObj[char] = newObj[char] + 1;

        }
        else{
            newObj[char] = 1;
        }
    }

    return newObj;

}

let o = frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}
console.log(o);