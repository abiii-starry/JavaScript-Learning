let obj = {
    name: "abi",
    pet: "starry"
};

let addMoney = function(obj) {
    obj.money = 999999;
    obj = { name: "axiba" }
    obj.money = -99999
};

addMoney(obj);
console.log(obj);  // { name: 'abi', pet: 'starry', money: 999999 }