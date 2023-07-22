function tribonacci(signature,n){
  if (n == 0) {
    return []
  }
  if ( n < 3) {
    let sum = signature.slice(0,n).reduce((partialSum, a) => partialSum + a, 0);
    return [sum]
  }
  for (let i = signature.length; i < n; i++){
    let sum = signature.slice(i-3,i).reduce((partialSum, a) => partialSum + a, 0);
    signature.push(sum)
  }
  return signature
}

// Refactor top two conditionals later
