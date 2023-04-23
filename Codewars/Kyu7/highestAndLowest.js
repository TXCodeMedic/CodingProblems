function highAndLow(numbers){
  var nums = numbers.split(" ")
  
  nums = nums.map(function(str) {
    return parseInt(str)
  })
  
  var min = Math.min(...nums)
  var max = Math.max(...nums)
  
  return (max + " " + min)
}
