function arrayDiff(a, b) {
  var newArr = []
  for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i]) != true ) {
      newArr.push(a[i])
    }
  }
  return newArr
}
