function filter_list(l) {
  // Return a new array with the strings filtered out
  var newArr = []
  for (let i = 0; i < l.length; i++) {
     if (typeof(l[i]) == "number") {
      newArr.push(l[i])
    } 
  }
  return newArr
}
