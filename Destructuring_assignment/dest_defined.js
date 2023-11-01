let [x='a', y='b'] = ['abi'];
console.log(x, y);  // abi b

let foo = "foooo";
let [z=foo] = [undefined];
console.log(z);