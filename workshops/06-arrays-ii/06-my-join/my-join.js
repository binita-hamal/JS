// YOUR CODE BELOW

function myJoin(arr,separator){
    let string = '';
    if(separator === undefined){
        separator = ','
    }
    
    for(let i=0; i<arr.length-1; i++){
        string = string + arr[i] + separator;
    }
    return string + arr[arr.length-1];
    }
    


let s =myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"
console.log(s);
let s1=myJoin(['let\'s', 'make', 'a', 'list'], ' '); 
console.log(s1);

let s2=myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"
console.log(s2);
console.log(typeof (s2))