function duplicateEncode(word){
  var result = ""
  var letterBank = {}
  word = word.toLowerCase()
  for (let i = 0; i < word.length; i++) {
    if ( word[i] in letterBank) {
      letterBank[word[i]] += 1
    } else {
      letterBank[word[i]] = 1
    }
  }
  for (let i = 0; i < word.length; i++) {
    if (letterBank[word[i]] > 1) {
      result += ")"
    } else {
      result += "("
    }
  }
  return result
}
