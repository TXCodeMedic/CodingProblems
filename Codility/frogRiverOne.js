// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Task Score: 100%
// Correctness: 100%
// Performance: 100%  Detected Time Complexity: O(N)
function solution(X, A) {
    let holdValues = new Set();
    for ( i = 0 ; i < A.length ; i++ ) {
        holdValues.add(A[i]);
        if ( holdValues.size == X ) { return i; }
    };

    return -1;
};
