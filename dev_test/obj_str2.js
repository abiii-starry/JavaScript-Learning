let obj = {
    "name": "Bobbi",
    "say": "meow"
};

console.log(obj+"");  // 已经变成了[obj obj]，所以打印为[obj obj]
console.log(obj);  // 正常打印

console.log(JSON.stringify(obj));  // 正常打印
console.log(JSON.stringify(obj+""));  // 打印为[obj obj]，原因应该同上
