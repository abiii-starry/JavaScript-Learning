let user = { name: "abi" };

let map = new Map();
let normalObj = {};

map.set(user, "I am user abi");
console.log(map.get(user));  // I am user abi
normalObj[user] = user;
console.log(normalObj);