// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score: 100%
// Correctness: 100%
// Performance: 100%
function solution(N, A) {
    let max = 0;
    let counters = Array(N).fill(max);
    let maxCounter = 0;

    for (let op of A) {
        if (op <= N && op >= 1) {
            maxCounter = 0;
            if (++counters[op - 1] > max) {
                max = counters[op - 1];
            }
        } else if(op === N + 1 && maxCounter === 0) {
            maxCounter = 1;
            for (let i = 0; i < counters.length; i++) {
                counters[i] = max;   
            }
        }
    }

    return counters;
};
