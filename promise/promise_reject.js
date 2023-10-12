let rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Succuss!")
    }, 2000);
    setTimeout(() => {
        reject(new Error("Ooh!"))
    }, 2000);
});

rejectPromise.then(
    result => console.log(result),
    error => console.log(error)
);