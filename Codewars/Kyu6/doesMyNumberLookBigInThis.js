function narcissistic(value) {
  value = String(value)
  var sum = 0
  
  for (let i = 0; i < value.length; i++){
    sum += (value[i] ** value.length)
  }
  return value == String(sum)
}
