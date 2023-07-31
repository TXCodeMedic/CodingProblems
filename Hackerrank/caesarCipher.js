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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

// ----------------------------------------------------- My Code -------------------------------------------------------------
function caesarCipher(s, k) {
    // Write your code here
    while (k > 26) {
        k -= 26
    }
    console.log("k: ", k)
    const isUpperCase = (string) => /^[A-Z]*$/.test(string)

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var result = ""
    
    for (let i = 0; i < s.length; i++){
        let letter = s[i]
        let isUpper = isUpperCase(letter)
        
        if (alphabet.includes(letter) || isUpper) {
            letter = letter.toLowerCase()
            let origIndex = alphabet.indexOf(letter)
            let newIndex = origIndex + k
            
            console.log("letter: ", letter, "before: ", newIndex)
            if ((newIndex >= alphabet.length) ? newIndex = (newIndex - (alphabet.length)) : {} )
            console.log("letter: ", alphabet[newIndex], "after: ", newIndex)
                        
            if (isUpper){
                result += alphabet[newIndex].toUpperCase()
            } else {
                result += alphabet[newIndex]
            }
            
        } else {
            result += s[i]
        }
    }
    return result
}
// -------------------------------------------------------------------------------------------------------------------------------
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
