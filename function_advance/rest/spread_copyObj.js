let arr = [1, 2, 3];
let arr2 = arr;

let arrCopy = [...arr];

console.log(arr == arr2);  // true
console.log(arr == arrCopy);  // false

arr2[1] = 999;
console.log(arr);  // [1, 999, 3]

arrCopy[1] = 8888;
console.log(arr);  // [1, 999, 3]