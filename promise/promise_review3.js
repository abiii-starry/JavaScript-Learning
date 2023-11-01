let myPromise = function() {
    const num = 999;
    return new Promise((resolve, reject) => {
        resolve(num);
    });
};

myPromise().then(result => {
    console.log(result);
})