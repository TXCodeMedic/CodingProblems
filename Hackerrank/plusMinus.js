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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// --------------------- My Code -----------------------------------
function plusMinus(arr) {
    // Write your code here
    var posCount = 0
    var negCount = 0
    var zeroCount = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            posCount += 1
        }
        else if (arr[i] < 0) {
            negCount += 1
        }
        else {
        zeroCount += 1
        }
    }
    var result = `${(posCount/arr.length).toFixed(4)}\n${(negCount/arr.length).toFixed(4)}\n${(zeroCount/arr.length).toFixed(4)}`
    console.log(result)
    return result
}
// -------------------------------------------------------------------------------

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
