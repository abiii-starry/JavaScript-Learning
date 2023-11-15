let myFunc = function() {
    let arg = 8888;
    return new Promise((resolve, reject) => {
        resolve(arg);
    });
};

let globalArg = myFunc();
console.log(globalArg);

myFunc().then((result) => {
    console.log(result);
})
