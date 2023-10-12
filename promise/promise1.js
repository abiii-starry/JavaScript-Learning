let myPromise = new Promise((resolve, reject) => {
    console.log("I am AAA");
    setTimeout(() => {
        console.log("I am abi")
        setTimeout(() => {
            console.log("I am inner")
        }, 2000);
    }, 6000);
});
console.log("I am BBB");