function duplicateCount(text){
  var result = 0
  text = text.toLowerCase()
  var letterDict = {}
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] in letterDict){
      letterDict[text[i]] += 1
    } else {
      letterDict[text[i]] = 1
    }
  }
  for (key in letterDict) {
    if (letterDict[key] > 1) {
      result += 1
    }
  }
  return result
}
