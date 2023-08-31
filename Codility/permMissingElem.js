// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score: 100%
// Correctness: 100%
// Performance: 100% O(N) or O(N * log(N))
function solution(A) {
    // Implement your solution here
    var n = A.length + 1;
    var arrSum = A.reduce((partialSum, a) => partialSum + a, 0);
    var result = (n * (n +1) / 2) - arrSum;
    return result;
};
