let array = ["abi", "starry", "bobi"];

let searchArray = function(array, key) {
    if(array.includes(key)) {
        console.log("find abi");
    } else {
        console.log("404 Not Found");
    }
};

searchArray(array ,"abi");
searchArray(array ,"abiii");
