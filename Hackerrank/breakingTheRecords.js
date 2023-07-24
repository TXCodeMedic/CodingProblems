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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

// ----------------------------- My Code ----------------------------------------------------
function breakingRecords(scores) {
  let startScore = scores[0];
  let maxScore = 0;
  let minScore = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > startScore) {
      maxScore++;
      startScore = scores[i];
    }
  }

  startScore = scores[0]

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < startScore) {
      minScore++;
      startScore = scores[i];
    }
  }

  let result = [maxScore, minScore]
  return result

}
// ----------------------------------------------------------------------------------------------

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
