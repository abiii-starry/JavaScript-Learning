let mapObj = new Map();  // 创建Map对象

mapObj.set(1, "num key");  // 根据键存储值，允许任何类型的key
mapObj.set(true, "bool key");
mapObj.set("1", "str key");

console.log(mapObj.get("1"));  // "str key"
console.log(mapObj.get(1));  // "num key"
console.log(mapObj.size);  // 3

mapObj.set("firstKey", 1)
.set("secondKey", "2")

console.log(mapObj.size);
