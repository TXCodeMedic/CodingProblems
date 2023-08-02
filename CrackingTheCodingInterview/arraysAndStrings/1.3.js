// Given two strings, write a method to decide if one is a permutation of the other.

function isPermutation(s1,s2) {
    return s1.split("").sort().join("") == s2.split("").sort().join("")
}

console.log("should be true: ", isPermutation("abc","cba")) // true
console.log("should be false: ", isPermutation("asf", "asw")) //false
