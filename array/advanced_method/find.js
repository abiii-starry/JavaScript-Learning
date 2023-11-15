let arr = [1, 2, 3, 4, 5];

let result = arr.find((item) => {
    return item == 3;
})

console.log(result);    

let arrowFunc = n => {return n * 10;}


console.log(arrowFunc(123));