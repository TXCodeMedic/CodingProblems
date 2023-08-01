'use strict';

const fs = require('fs');

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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

// Study:
// Late reply, but the reason this works is: ( +a + +b ) coerces each variable with a unary operator ( + ), to assure the addition of two integers and not the concatination of two strings.
//Then, the integer is being multiplied by the concat multiplier ( * k ) and converted back to a string ( + "" )
// ------------------------------ My Code --------------------------------------------------
function superDigit(n, k) {
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return (n.length > 1) ? superDigit(n, 1) : n.charAt(0)
}
// -----------------------------------------------------------------------------------------
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = firstMultipleInput[0];

    const k = parseInt(firstMultipleInput[1], 10);

    const result = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
