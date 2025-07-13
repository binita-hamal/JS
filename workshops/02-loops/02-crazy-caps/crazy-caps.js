// YOUR CODE BELOW
// function crazyCaps(string){
//     let newString = ""
//     let firstLetter  = string[0].toLowerCase();
//     for(let i =1; i<string.length; i++){
//         newString  = (newString + string[i]).toUpperCase();
//     }
//     return firstLetter + newString;

// }

function crazyCaps(string){
    let result ='';
    for(let i=0; i<string.length; i++){
        if(i%2){
            result += string[i].toUpperCase();
        }
        else{
            result += string[i].toLowerCase();
        }
        
    }
    return result;
}

let s = crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!
console.log(s)