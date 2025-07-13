// YOUR CODE BELOW


// function myLastIndexOf(array,searchValue,startIdx){
//     if(startIdx ===undefined){
//         console.log(array.lastIndexOf(searchValue))
//     }
//     else if(!array.includes(searchValue)){
//         console.log(array.indexOf(searchValue))
//     }
//     else{
//         for(let i=startIdx; i>=0; i--){
//             if(array[i].includes(searchValue))
//                 console.log(array.indexOf(searchValue));
//         }
//     }
// }


function myLastIndexOf(array,searchValue,startIdx){
    if(startIdx===undefined){
        for(let i=array.length-1; i>=0; i--){
            if(array[i] === searchValue){
                console.log(i);
                break;
            }
            

        }
    }
    else{
        for(let i=startIdx; i>=0; i--){
            if(array[i] === searchValue){
                console.log(i);
                break;
            }
        }

    }
}

myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3


myLastIndexOf(['bini', 'the', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 1


