function moveZeros(arr) {
  var result = []
  var count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count += 1
    } else {
      result.push(arr[i])
    }
  }
  for (let i = 0; i < count; i++) {
    result.push(0)
  }
  return result
}
