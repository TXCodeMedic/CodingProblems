// Implement an algorithm to determine if a string has all unique characters.

function allUniqueChars(s) {
    var mySet = new Set()
    for (let i = 0; i < s.length; i++){
    if ( mySet.has(s[i]) ) {
        return false
    } else {
        mySet.add(s[i])
    }
}
    return true
}


// Testing
console.log(allUniqueChars('abcdefg')) // Output: True
console.log(allUniqueChars('aaaaabbbb')) // Output: False
