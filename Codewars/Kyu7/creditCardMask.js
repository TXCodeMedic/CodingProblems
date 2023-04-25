function maskify(cc) {
  if (cc.length <= 4){
    return cc
  } else {
    var maskedNumber = ""
    var hash = cc.length - 4
    
    for (let i = 0; i < hash; i++) {
      maskedNumber += "#"
    }
    for (let i = hash; i < cc.length; i++){
      maskedNumber += cc[i]
    }
  }
  return maskedNumber
}
