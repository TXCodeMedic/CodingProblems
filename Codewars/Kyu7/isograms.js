function isIsogram(str){
  str = str.toLowerCase()
  var letterBank = {}
  for (let i = 0; i < str.length; i++) {
    if (letterBank[str[i]] == undefined ) {
      letterBank[str[i]] = 1
    } else {
      letterBank[str[i]] += 1
    }
    
    if (letterBank[str[i]] > 1) {
      return false
    } 
  }
  return true
}
