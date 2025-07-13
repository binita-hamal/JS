
function billerBuilder(state){
    let shipping;
    let tax;
    if(state==='NY'){
        shipping=1.03;
        tax=1.04
    }
    else if(state==="NJ"){
        shipping = 1.05;
        tax = 1.06625;
    }
    return function(price){
        let finalPrice = price* shipping*tax;
        return finalPrice;
    };
}

let newYorkBiller = billerBuilder('NY'); //finalprice
let f = newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04) //finalprice(100)
console.log(f)