function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

function chainReaction(start,arrayOfFuncs){
    let result = start; //result =0;
    arrayOfFuncs.forEach((func) =>{
        result = func(result);
    })

    return result;

}

let a = [addTen, subtractFive, multiplyFive]
chainReaction(0,a);