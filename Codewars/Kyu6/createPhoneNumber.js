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

// Function to Learn
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}
