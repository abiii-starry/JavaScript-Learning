let a, b, c = [1, 3, 5];
console.log(b);  // udf
console.log(a);  // udf
console.log(c);  // [1, 3, 5]

let [e, f] = [7, 9];
console.log(e, f);  // 7, 9

let [g, ...h] = [1, 3, 4, ,5 ,6 ,7];
console.log(h);