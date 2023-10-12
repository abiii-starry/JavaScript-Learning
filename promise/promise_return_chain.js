let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Work is done!");
        resolve(1);
    }, 1000);
});

myPromise.then(function (result) {
    console.log("then 1: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log("then 2: ");
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
    console.log(result);
});