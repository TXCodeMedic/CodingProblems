function spinWords(string){
  var newSentence = ""
  string = string.split(" ")
  // Break apart the sentence and count
  for (let i = 0; i < string.length; i++) {
    // reverse words longer than or equal to 5
    if (string[i].length >= 5) {
      newSentence += string[i].split("").reverse().join("")
    } else {
      // do NOT reverse word if under 5
      newSentence += string[i]
    }
    // Add space if not last word
    if (i < (string.length - 1)) {
      newSentence += " "
    }
  }
  return newSentence
}
