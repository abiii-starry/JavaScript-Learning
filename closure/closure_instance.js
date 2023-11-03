let a = 888;
let makeCounter = function() {
    let count = 0;
    function addCount() {
        count += 1;
        return count;
    }
    return addCount;
}

let addCount = makeCounter();
addCount();
addCount();

console.log(addCount());