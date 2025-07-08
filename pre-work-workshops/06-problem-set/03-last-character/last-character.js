// YOUR CODE BELOW


function lastCharacter(str1,str2){
    let str1Length = str1.length;
    let str2Length =str2.length;

    if(str1[str1Length-1] === str2[str2Length-1]){
        return true;
    }
    else{
        return false;
    }
}
console.log(lastCharacter('apples', 'pumpkins')); // => true

console.log(lastCharacter('marker', 'pen')); // => false