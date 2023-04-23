function sumFactorial(arr){
  var sumFactorial = 0
  for (let i = 0; i < arr.length; i++){
    sum = arr[i]
    arr[i] -= 1
    
    while (arr[i] != 0) {
      sum *= arr[i]
      arr[i] -= 1
    }
    sumFactorial += sum
  }
  return sumFactorial
}
