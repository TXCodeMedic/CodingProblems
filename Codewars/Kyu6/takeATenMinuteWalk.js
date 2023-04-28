function isValidWalk(walk) {
  if (walk == []) {
    return true
  }
  if (walk.length != 10) {
    return false
  }
  
  var x_coor = 0
  var y_coor = 0
  
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      y_coor += 1
    }
    else if (walk[i] == "s") {
      y_coor -= 1
    }
    else if (walk[i] == "e") {
      x_coor += 1
    }
    else if (walk[i] == "w") {
      x_coor -= 1
    }
  }
  return ((x_coor == 0) && (y_coor == 0))
}
