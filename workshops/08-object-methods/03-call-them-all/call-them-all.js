// YOUR CODE BELOW


function callThemAll(obj,num){
    let newArray=[];
    let keys =Object.keys(obj); //keys = ['addten','addtwenty'];
    for(let i=0; i<keys.length; i++){
        let key = keys[i];
        if(typeof obj[key] === 'function'){
        let result=obj[key](num); //result = addten(num)
        newArray.push(result);
    }
}
    return newArray;
}


let addsNums = {
    addTen: function(num) {
      return num + 10;
    },
  
    addTwenty: function(num) {
      return num + 20;
    },
  
    someProperty: 'value'
  };
  
callThemAll(addsNums, 100); // => [110, 120]