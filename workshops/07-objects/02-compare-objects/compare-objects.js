// YOUR CODE BELOW

function compareObjects(obj1,obj2){
    let k1=Object.keys(obj1)
    let k2=Object.keys(obj2);

    if(k1.length !== k2.length){
        return false;
    }

    for(let key of k1){
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }

    return true;
    
}

let c = compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
console.log(c);
