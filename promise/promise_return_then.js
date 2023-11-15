let myFunc = () => {
    let arg = 888;
    return new Promise((resolve, reject) => {
        resolve(arg);
    });
};

let myCall = () => {
    myFunc().then((result) => {
        console.log(result);
        return result+888;
    }).then((r2) => {
        console.log(r2)
    })
};

myCall()