let obj = {
    name: "波比",
    role: "cat"
};

console.log(typeof obj);
console.log(""+obj);

let obj_str = "" + obj;
console.log(obj_str);

console.log(JSON.stringify(obj_str));

let obj_stringify = JSON.stringify(obj);
console.log(obj_stringify+"");

