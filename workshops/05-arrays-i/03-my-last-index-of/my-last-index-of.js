function myLastIndexOf(array,searchValue,startIdx){
    if(startIdx===undefined){
        for(let i=array.length-1; i>=0; i--){
            if(array[i] === searchValue){
                return i;
            }

        }
        return -1;
    }
    else{
        for(let i=startIdx; i>=0; i--){
            if(array[i] === searchValue){
                return i;
                break;
            }
        }

    }

}



