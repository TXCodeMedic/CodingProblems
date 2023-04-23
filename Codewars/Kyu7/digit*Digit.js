function squareDigits(num){
  var num = num.toString()
  var answer = ''
  for (let i =0; i < num.length; i++){
    answer += num[i] ** 2
    }
  return parseInt(answer)
  }
