function alphabetPosition(text) {
  text = text.toLowerCase()
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var changedLetters = []
  for (let i = 0; i < text.length; i++) {
    if (letters.includes(text[i])) {
      changedLetters.push(letters.indexOf(text[i]) + 1)
    }
  }
  let result = changedLetters.join(" ")
  return result;
}
