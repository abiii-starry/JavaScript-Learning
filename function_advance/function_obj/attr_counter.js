function makeCounter() {
    function count() {
        return count.num++;
    }
    count.num = 0;
    return count;
}

let counter = makeCounter();
counter();
console.log(counter());
console.log(counter.num);

