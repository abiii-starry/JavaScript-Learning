const myFunc = function() {
    let arr = [];

    let myPromise = new Promise((resolve, rj) => {
        console.log("start of promise")
        resolve(123)
    })
    myPromise.then((result) => {
        console.log("then of promise")
        console.log(result)
        for (let i of [...Array(5).keys()]) {
            arr.push(i)
        }
        console.log(arr, arr.length);
    })
    console.log("end of promise")
    console.log("end value", arr, arr.length);
    return arr;
}

let newArr = myFunc();
console.log("I am done")
console.log("newArr", newArr, newArr.length)