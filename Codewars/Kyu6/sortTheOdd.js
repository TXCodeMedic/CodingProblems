function sortArray(array) {
  // grab odd numbers
  var oddNumbers = array.filter(number => number % 2);
  var sortedOddNumbers = oddNumbers.sort((a,b) => a - b);
  
  // if number % 2 == 1, it will get placed
  var result = array.map(number => number % 2 ? sortedOddNumbers.shift() : number)
  return result
}
