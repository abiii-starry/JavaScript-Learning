let successPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Status: fulfilled");
    }, 2000);
});

successPromise.then(
    result => console.log(`End-${result}`)
)