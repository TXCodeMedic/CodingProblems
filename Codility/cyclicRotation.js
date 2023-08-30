// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    if (A.length === 0 || A === undefined) {return [];}

    for (let i = 0; i < K; i++) {
        let temp = A.pop();
        A.unshift(temp);
    };
    return A;
}
