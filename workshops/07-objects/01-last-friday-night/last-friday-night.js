// YOUR CODE BELOW
let transactions = [
    {
      name: "Tons of glitter",
      amount: 70
    },
    {
      name: "Porcelain Pink Flamingos",
      amount: 92
    },
    {
      name: "Chandelier replacement",
      amount: 10000,
    },
    {
      name: "Dinner at TGIF x6",
      amount: 350
    }
  ];

function lastFridayNight(array){
    let sum =0;
    for(let i=0; i<array.length; i++){
        sum = sum + array[i].amount;
    }
    return sum;
}

let s = lastFridayNight(transactions) // => 10512
console.log(s);