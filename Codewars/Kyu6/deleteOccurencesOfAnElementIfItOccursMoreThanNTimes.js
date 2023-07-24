function deleteNth(arr,n){
  
  eventCounter = {}
  result = []
  for (let i = 0; i < arr.length; i++) {    
    if (eventCounter[arr[i]] === undefined) {
      eventCounter[arr[i]] = 1
      
    } else {
      eventCounter[arr[i]] += 1
      }
    
      if (eventCounter[arr[i]] <= n) {
        result.push(arr[i])
    }
  }
  return result
}
