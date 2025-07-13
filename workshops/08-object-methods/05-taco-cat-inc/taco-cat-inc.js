let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

tacoCatInc.currentInventory = function () {
  debugger;
  let val = 0;
  for (let category in this) {
    let k = Object.keys(this[category]); //k=['hard','soft'];
    console.log(k);
    for (let i = 0; i < k.length; i++) {
      //k[0] = 'hard',k[i]='soft'
      val += this[category][k[i]].cost * this[category][k[i]].quantity; //
    }
  }
  return val;
};
// tacoCatInc.currentInventory();

// let order = {
//   gourmetShell: "hard treat shell",
//   gourmetFishFilling: "salmon",
// };

tacoCatInc.sale = function (obj) {
  //let obj=order;
  debugger;
  let key = Object.keys(obj); //key =['gourmetShell','gourmetFishFilling']
  let orderPrice = 0;
  for (let i = 0; i < key.length; i++) {
    orderPrice += this[key[i]][obj[key[i]]].cost;
    this[key[i]][obj[key[i]]].quantity--;
  }
  this.cash += orderPrice;
  return orderPrice;
};
// tacoCatInc.sale(order);
