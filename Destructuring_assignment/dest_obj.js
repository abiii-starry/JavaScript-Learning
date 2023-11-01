// let {arg1, arg2} = {arg2: "second", arg1: "first"};
let {arg1:a, arg2:b} = {arg2: "second", arg1: "first"};
// console.log(arg1, arg2);  // undefined
console.log(a, b);  // first second