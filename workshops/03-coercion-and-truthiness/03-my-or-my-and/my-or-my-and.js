// YOUR CODE BELOW
// Or = only one true = true
// all false = false
//or operator = return first true false, return last false value;
function myOr(a,b,c){
    if(a){
        return a;
    }
    else if(b){
        return b;
    }
    else{
        return c; 
    }

}

// let a =myOr(true, false, false)
let b = myOr('apples',1,false)
console.log(b);


//and operator
//return first false value


function myAnd(m,n,o){
    if(!m){
        return m;
    }
    else if(!n){
        return n;
    }
    else{
        return o;
    }

}

let r=myAnd(1, 'apples', false)
//  === (1 && 'apples' && true); // => true
console.log(r)