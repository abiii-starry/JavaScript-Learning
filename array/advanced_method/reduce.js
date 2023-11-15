let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((ret, item) => {
    return ret + item;
}, 100);
console.log(result);  // 115