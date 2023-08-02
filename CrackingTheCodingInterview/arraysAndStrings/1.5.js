/*
Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become
a2blc5a3. If the "compressed" string would not become smaller than the
original string, your method should return the original string.
*/

function stringCompression(s) {
    var i = 0
    result = ""
    while ( i < s.length ) {
        let j = i + 1
        result += s[i]
        if (s[i] == s[j]) {
            var counter = 1
            j++
            while (s[i] == s[j]) {
                counter++
                j++
            }
            result += counter.toString()
        }
        if (counter == undefined) {
            i++
    } else {
        i = j
        }
    }
    
    if (result.length < s.length){
    return result
    }
    return s
}

// Testing
console.log("test1: aaabbbcccarrrry --> a2b2c2ar3y")
console.log("Should be true: ",stringCompression("aaabbbcccarrrry") == "a2b2c2ar3y")
console.log("test2: ", "aa --> aa")
console.log("Should be true: ", stringCompression("aa"))
