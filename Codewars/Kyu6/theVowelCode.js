var vowels = [0, 'a', 'e', 'i', 'o', 'u']

function encode(string) {
  for (let i = 0; i < string.length; i++){
    if (vowels.includes(string[i])) {
      string = string.replace(string[i], vowels.indexOf(string[i]))
    }
  }
  return string
}

function decode(string) {
  for (let i = 0; i < string.length; i++) {
    if ( isNaN(string[i]) == false ){
      string = string.replace(string[i], vowels[string[i]])
    }
  }
  return string
}
