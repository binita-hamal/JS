// YOUR CODE BELOW
function taxCalculator(price,state){
    if(state === "NY"){
        let afterTaxAmount = price + (price *4)/100;
        return afterTaxAmount
    }
    if(state === "NJ"){
        let afterTaxAmount = price + (price* 6.625)/100;
        return afterTaxAmount
    }

}

console.log(taxCalculator(100, 'NY')); // => 104
console.log(taxCalculator(100, 'NJ')); // => 106.625


