let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("fulfilled");
        resolve("done!")
    }, 2000);
});

myPromise.then(
    result => console.log(result, 123),
    error => console.log(error)
)