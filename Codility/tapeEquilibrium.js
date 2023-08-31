// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score: 53%
// Correctness: 100%
// Performance: 0%  Detected Time Complexity O(N^2)
function solution(A) {
    var minSum;
    for (let i = 1; i < A.length; i++) {
       let leftSum = A.slice(0,i).reduce((partialSum, a) => partialSum + a, 0);
       let rightSum = A.slice(i,A.length).reduce((partialSum, a) => partialSum + a, 0);
       let checkedSum = Math.abs(leftSum - rightSum);
       if (minSum === undefined || (checkedSum < minSum)) { minSum = checkedSum; }
    }
    return minSum
};
