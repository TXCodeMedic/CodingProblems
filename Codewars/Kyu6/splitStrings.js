function solution(str){
  var result = []
   if ( str.length % 2 != 0) {
     for ( let i = 1; i < str.length - 1; i+=2) {
       result.push(str[i -1] + str[i])
     }
     result.push(str[str.length -1] + "_")
     return result
   } else {
     for ( let i = 1; i < str.length; i+=2) {
      result.push(str[i -1] + str[i]) 
     }
     return result
   }
}
