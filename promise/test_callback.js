function out(callback) {
    let result = callback();
    return result;
}

function inin() {
    return 123;
}

console.log(out(inin));

function a() {
    function b() {
        let arg = 1239;
        return arg;
    }
    return b();
}
console.log(a());

