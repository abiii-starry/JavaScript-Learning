function sayHi() {
    console.log("hi");
}

console.log(sayHi.name);  // sayHi

let noNameFunc = function() {
    console.log("I have no name");
};
console.log(noNameFunc.name);  // noNameFunc