// YOUR CODE BELOW
//[1,[2,3],4]

function arrayFlattener(arr){
    let a=[];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            for(let j=0; j<arr[i].length; j++){
                a.push(arr[i][j])       
            }
        }
        else{
            a.push(arr[i]);
        }

        
    }

    return a;

}
