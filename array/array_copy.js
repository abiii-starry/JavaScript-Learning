let array_a = ["abi", 1, true, function() { console.log("ok"); }];

let array_b = array_a;

array_a.push("end");
console.log(array_b);