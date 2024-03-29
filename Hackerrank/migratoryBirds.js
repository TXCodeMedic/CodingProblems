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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// ------------------------------------ My Code ------------------------------------
function migratoryBirds(arr) {
    var counter = {}
    
    for (let i = 0; i < arr.length; i++) {
        if (counter[arr[i]] == undefined) {
            counter[arr[i]] = 1
        } else {
            counter[arr[i]] += 1
        }
    }
    var maxType = 0
    var maxCounter = 0
    for (const key in counter) {
        if (counter[key] > maxCounter) {
            maxType = key
            maxCounter = counter[key]
        }
    }
        
    return maxType
}    
// ----------------------------------------------------------------------------------

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
