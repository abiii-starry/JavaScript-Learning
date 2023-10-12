let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("the first work is done!")
        resolve(3);
    }, 2000);
});

myPromise.then(
    result => {
        console.log(`1. result: ${result}`);
        return result * 2;
    }
).then(
    result => {
        console.log(`2. result: ${result}`);
        return result * 3;
    }
);