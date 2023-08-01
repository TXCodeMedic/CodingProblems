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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */
// Need to refactor.
// ---------------------------------------------- My Code ---------------------------------------------------
function gridChallenge(grid) {
    // Write your code here
    const alpha = [
        'a','b','c','d','e','f','g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x',
        'y','z']
    // sort the rows
    var numGrid = []
    for (let i = 0; i < grid.length; i++) {
        let newRow = []
        for (let j = 0; j < grid[i].length; j++){
            newRow.push(alpha.indexOf(grid[i][j]))
        }
        newRow.sort((a,b) => a - b)
        numGrid.push(newRow)
    }
    // check to see that the cols are ascending
    for (let i = 1;  i < numGrid.length; i++) {
        for (let j = 0; j <numGrid[i].length; j++){
            if (numGrid[i-1][j] > numGrid[i][j]) {
                return "NO"
            }
        }
    }
    return "YES"
}
// ------------------------------------------------------------------------------------------------------------
// Study this solution
// function gridChallenge(grid) {
//     const sorted = grid.map((item) => item.split('').sort().join(''));
//     for (let j = 0; j < sorted[0].length; j++) {
//         for (let i = 0; i < sorted.length - 1; i++) {
//             if (sorted[i][j] > sorted[i + 1][j]) return "NO";
//         }
//     }
//     return "YES"
// }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
