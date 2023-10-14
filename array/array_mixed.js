let arr = ["apple", { name: "abi" }, true, function() { console.log("ok"); }];
console.log(arr);

console.log(arr[1].name);

arr[3]();

console.log(arr.at(-1));