// Implement a function, which reverses a null-terminated string.
function reverseString(s) {
    if s == null {
        return 0
    }
    
    s = s.split("")
    s = s.reverse()
    return s.join("")
}

console.log(reverseString('abcdefg')) // Output: gfedcba
