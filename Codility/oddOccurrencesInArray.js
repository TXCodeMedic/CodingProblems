// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var counter = {};
    for (let i = 0; i < A.length; i++) {
        if (counter[A[i]] === undefined) {
            counter[A[i]] = 1;
        } else {
            counter[A[i]] += 1;
        };
    };
    for (var key in counter) {
        if (counter[key] % 2 != 0) {
            return parseInt(key);
        };
    };
};
