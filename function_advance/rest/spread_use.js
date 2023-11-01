let numList = [1, 3, 5, 7, 9];

let addNum = function(...arg) {
    let sum = 0;
    for (let num of arg) {
        sum += num;
    }
    return sum;
};

console.log(addNum(...numList));