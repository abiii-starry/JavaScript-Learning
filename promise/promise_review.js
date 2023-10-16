let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("running");
        let randomNum = Math.random();
        if(randomNum > 0.5) {
            resolve("Success: big than 0.5");
        } else {
            reject("Error: small than 0.5");
        }
    })
});

myPromise.then(result => {
    console.log("Success!");
    console.log(result);
}).catch(result => {
    console.log("Fail");
    console.log(result);
})