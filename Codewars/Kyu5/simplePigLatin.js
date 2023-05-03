function pigIt(str){
  str = str.split(" ")
  var punctuation = [".", "!", "?"]
  var result = []
  for (let i = 0; i < str.length; i++){
    if (punctuation.includes(str[i])){
      result.push(str[i])
    } else {
    result.push(str[i].slice(1, str[i].length) + str[i][0] + "ay")
      }
  }
  return result.join(" ")
}
