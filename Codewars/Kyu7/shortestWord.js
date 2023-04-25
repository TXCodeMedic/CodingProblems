function findShort(s){
  s = s.split(" ")
  var lenCount = []
  
  for (let i = 0; i < s.length; i++){
    lenCount.push(s[i].length)
  }
  
  return Math.min(...lenCount)
}
