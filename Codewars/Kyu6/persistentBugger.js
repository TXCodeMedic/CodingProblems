function persistence(num) {
   var count = 0
   var digits = num.toString().split("")
   
   while (digits.length > 1) {
     let results = 1
     
     for (let i = 0; i < digits.length; i++) {
       results = (results * digits[i])
     }
     
     digits = results.toString().split("")
     count += 1
   }
  return count
}
