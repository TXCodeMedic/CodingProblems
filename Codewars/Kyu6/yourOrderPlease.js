function order(words){
  if (words == "") {
    return ""
  }
  
  words = words.split(" ")
  var result = ""
  var dict = {}
  
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (isNaN(words[i][j]) == false) {
        dict[words[i][j]] = words[i]
      }
    }
  }
  for (let i = 1; i < words.length + 1; i++) {
    result += dict[i]
    console.log(result)
    if (i < words.length) {
      result += " "
    }
  }
  return result
}

// Need to refactor
