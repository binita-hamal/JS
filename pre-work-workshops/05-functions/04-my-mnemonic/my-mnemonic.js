// YOUR CODE BELOW

function myMnemonic(...args){
    let newString=""
    for(let i=0; i<args.length; i++){
        newString += args[i][0]
    }
    return newString;

}

let string1 =myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
console.log(string1)

let string2 =myMnemonic('We', 'Eat', 'Eggs'); // => MASH
console.log(string2)

let string3 =myMnemonic('Binita', 'Tinku'); // => MASH
console.log(string3)

let str = myMnemonic(); // => WEE
console.log(str)