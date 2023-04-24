function descendingOrder(n){
  //...
  n = n.toString()
  sortedArr = []
  for (let i = 0; i < n.length; i++) {
    sortedArr.push(n[i])
  }
  sortedArr = sortedArr.sort(compareFunction)
  console.log(sortedArr)
  result = sortedArr.join("")
  return parseInt(result)
}

function compareFunction(a,b) {
  // a- b left -> right
  // b - a right <- left
  return b - a
}
