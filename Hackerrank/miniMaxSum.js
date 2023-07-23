'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// ------------- My Code -------------------------------------------
function miniMaxSum(arr) {
    // Write your code here
    let sum=arr.reduce((a,b)=>{
        return a+b;
    });
    const min=sum-Math.max(...arr);
    const max=sum-Math.min(...arr);

    console.log(min+" "+max);
    return((sum - max) + ' ' + (sum - min));
}
// -------------------------------------------------------------------

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
