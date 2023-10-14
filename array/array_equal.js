let array_a = [1, 2, 3];
let a_copy = array_a;

let array_b = [1, 2, 3];

console.log(array_a == a_copy);  // true
console.log(array_a == array_b);  // false
console.log(array_a === a_copy);
console.log(array_a === array_b);
