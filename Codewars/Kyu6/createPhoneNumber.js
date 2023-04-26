function createPhoneNumber(numbers){
  var first = "("
  var middle = ""
  var last = "-"
  
  for (let i = 0; i < 3; i++){
    first += numbers[i]
  }
  first += ") "
  
  for (let i = 3; i < 6; i++) {
    middle += numbers[i]
  }
  
  for (let i = 6; i < numbers.length; i++) {
    last += numbers[i]
  }
  return first + middle + last
}
