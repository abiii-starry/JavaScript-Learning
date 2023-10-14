let arr = [1, 2, 4, 8, 16];

arr.length = 3;
console.log(arr);  // [ 1, 2, 4 ]

arr.length = 5;
console.log(arr);  // [ 1, 2, 4, <2 empty items> ]