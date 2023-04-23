function solution(number){
  var total = 0
  for (let i =1; i < number; i++){
    if ( (i % 3 == 0) || (i % 5 ==0)){
        total += i
      }
  }
  return total
}
