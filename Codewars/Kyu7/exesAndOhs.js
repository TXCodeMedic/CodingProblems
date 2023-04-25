function XO(str) {
  var dict = {}
  str = str.toLowerCase()
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] in dict) {
      dict[str[i]] += 1
    } else {
      dict[str[i]] = 1
    }
  }
  return (dict['x'] == dict['o'])
}
