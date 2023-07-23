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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// -------------------------- My Code ---------------------------------------------
function timeConversion(s) {
    // Write your code here
    console.log(s)
    var hour = s.slice(0,2)
    var mins = s.slice(3,5)
    var secs = s.slice(6,8)
    var tod = s.slice(8,10)
    
    if ((hour == "12") && (tod == "AM")){
        hour = "00"
    }
    
    if ( (tod == "PM") && (hour != "12") ){
        hour = parseInt(hour)
        hour += 12
        hour = hour.toString()
    }
// ---------------------------------------------------------------------------------
  
    var result = `${hour}:${mins}:${secs}`
    console.log("hour: ",hour,"mins: ", mins,"secs: ", secs, tod )
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
