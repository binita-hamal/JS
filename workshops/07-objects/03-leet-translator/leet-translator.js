let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];




function leetTranslator(string){
    let newObj={};
    for(let i=0; i<letters.length;i++){
        newObj[letters[i]] = leetChars[i];
    }
    string=string.toLowerCase();
    let result=''
    for(let i=0; i<string.length; i++){
        let char = string[i] //char = f
        if(newObj[char]){
            result += newObj[char];
        }
        else{
            result +=char; //.,
        }
    }
    return result;
}
    