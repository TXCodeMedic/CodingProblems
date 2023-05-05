function expandedForm(num) {
  num = String(num).split("")
  var result = []
  for (let i = 0; i < num.length; i++) {
    if (num[i] == '0') {
      continue
    } else {
    var place = 10 ** (num.length - i - 1)
    result.push(parseInt(num[i] * place))
      }
  }
  return result.join(" + ")
}
