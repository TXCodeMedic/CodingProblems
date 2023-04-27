var uniqueInOrder=function(iterable){
  if (iterable == []) {
    return []
  }
  
  var result = [iterable[0]]
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != result[result.length - 1]) {
      result.push(iterable[i])
    }
  }
  return result
}
