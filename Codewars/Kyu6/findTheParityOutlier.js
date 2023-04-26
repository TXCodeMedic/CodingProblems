function findOutlier(integers){
  var oddCount = {'count': 0, 'recent': ''} 
  var evenCount = {'count': 0, 'recent': ''}
  
  for (let i = 0; i < integers.length; i++){
    if ((integers[i] % 2 == 0) || (integers[i] == 0)) {
      evenCount['count'] += 1
      evenCount['recent'] = integers[i]
    }
    if (integers[i] % 2 != 0) {
      oddCount['count'] += 1
      oddCount['recent'] = integers[i]
    }
  }
  
  if (((evenCount['count']) > 1) && ((oddCount['count']) == 1)){
      return oddCount['recent']
    }
    if (((oddCount['count']) > 1) && ((evenCount['count']) == 1)){
      return evenCount['recent']
    }
  }

// Need to refactor in order to decrease run time.     Very inefficient as is
