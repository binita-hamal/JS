function zeroDarkThirty(num){
    if(num ===0){
        return NaN;
    }
    let string = String(num)
    let s=''
    for(let i=0; i<string.length; i++){
        if(string[i] ==='0'){
            continue;
        }
        s= s + string[i] //string[i] + s
    }
    return Number(s)

}

let a = zeroDarkThirty(10) // => 1232
console.log(a)
