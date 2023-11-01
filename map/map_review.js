let myMap = new Map();
myMap.set("I am key", "I am value");
console.log(myMap.get("I am key"));

let myObj = { name: "abi" };
myMap.set(myObj, "I am obj");
console.log(myMap);