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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// --------------------- My Code ---------------------------------
function staircase(n) {
    // Write your code here
    var result = ""
    for (let i = 1; i < n + 1; i++){
        let line = " ".repeat(n - i)
        line += "#".repeat(i)
        result += line + '\n'
    }
    console.log(result)
    return result
}
// ----------------------------------------------------------------

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
