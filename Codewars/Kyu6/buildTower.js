function towerBuilder(nFloors) {
  var result = []
  for (let i = 1; i <= nFloors ; i++) {
    var space = " ".repeat(nFloors - i)
    var star = "*".repeat(2 * i - 1)
    result.push(space + star + space)
    }
  return result
}
