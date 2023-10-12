// sync，阻塞式，同步执行
let fs = require("fs");

let text = fs.readFileSync("test.txt");

console.log(`文件读取结果为:\n${text}`);
console.log("===end===");

// callback，非阻塞式，先打印了最后一步end才执行
fs.readFile("test.txt", function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("end!")