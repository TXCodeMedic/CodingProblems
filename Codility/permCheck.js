// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score: 100%
// Correctness: 100%
// Performance: 100%  Detected Time Complexity: O(N) or O(N *log(N))
function solution(A) {
    // Implement your solution here
    A = A.sort((a, b) => a - b );

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== i + 1) { return 0 ;}
    }
    return 1;
};
