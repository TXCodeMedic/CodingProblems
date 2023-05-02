function findUniq(arr) {
  
  var counter = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in counter) {
      counter[arr[i]] += 1
    } else {
      counter[arr[i]] = 1
    }
  }
  for (key in counter){
    if (counter[key] == 1) {
      return parseFloat(key)
    }
  }
  return -1
}
