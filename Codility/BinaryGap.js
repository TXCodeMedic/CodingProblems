// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Linear Solution
function solution(N) {
    // Turn int into Binary String
    N = N.toString(2);
    var maxGap = 0;
    var curGap = 0;

    for (let i = 0; i < N.length; i++) {
        if (N[i] === '0') { curGap++;}

        else {
            if (curGap > maxGap) { maxGap = curGap; }
            curGap = 0;
        }
    }
    return maxGap;
};
