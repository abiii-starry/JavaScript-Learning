let arr = [13, 27, 18, 26];

let max = arr.reduce((accumulator, item) => {
    return accumulator >= item ? accumulator : item;
})
console.log(max);