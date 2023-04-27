function toCamelCase(str){
  if (str == "") {
    return ""
  }
  
  str = str.replaceAll("_", "-")
  str = str.split("-")
  var result = ""
  
  for (let i = 0; i < str.length; i++) {
    if (i > 0) {
      result += str[i][0].toUpperCase()
    } else {
      result += str[i][0]
    }
    var word = str[i].slice(1)
    word = word.toLowerCase()
    result += word
  }
  return result
}
