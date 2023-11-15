function callFunc() {
    console.log("hello");
    callFunc.count ++;
}
callFunc.count= 0;
callFunc();
console.log(callFunc.count);

console.log(callFunc.count);