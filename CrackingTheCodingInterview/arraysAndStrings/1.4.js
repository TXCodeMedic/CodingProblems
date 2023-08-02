/*
Write a method to replace all spaces in a string with'%20'. You may
assume that the string has sufficient space at the end of the string to
hold the additional characters, and that you are given the "true"
length of the string. (Note: if implementing
in Java, please use a character array so that you can perform this
operation in place.)

EXAMPLE
Input: "Mr John Smith
Output: "Mr%20Dohn%20Smith"

*/

function replaceSpace(s) {
    result = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            result += s[i]
        } else {
            result += "%20"
        }
    }
    return result
}

console.log("Should be true: ", "Mr%20John%20Smith" == replaceSpace("Mr John Smith")) // true
