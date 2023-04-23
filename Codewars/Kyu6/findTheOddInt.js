function findOdd(A) {
 var dict = {}
 for (let i = 0; i < A.length; i++) {
  if (dict.hasOwnProperty(A[i])) {
   dict[A[i]] += 1
  } else {
   dict[A[i]] = 1
  }
 }
 for (num in dict) {
  if (dict[num] % 2 != 0) {
   return parseInt(num)
  }
 }
}