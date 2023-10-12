let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let num = Math.random();
        console.log(`Num is ${num}`);
        if (num < 0.5) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

myPromise.then(
    result => {
        console.log(result);
    },
    reject => {
        console.log(reject)
    }
);