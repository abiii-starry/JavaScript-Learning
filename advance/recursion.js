let sum = 0;

function recursion(n) {
    if (n -1 < 0) {
        console.log(sum);
        return;
    }
    else {
        sum += n;
        return recursion(n-1);
    }
};

recursion(10);