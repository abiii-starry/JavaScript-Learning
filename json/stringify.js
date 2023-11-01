let newObj = {
    name: "abi",
    pet: "starry",
    money: 99999999999
};

let objStringify = JSON.stringify(newObj);
console.log(objStringify);

console.log(typeof newObj, typeof objStringify);