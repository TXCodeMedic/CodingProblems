function validBraces(braces){
  var stack = []
  
  for (let i = 0; i < braces.length; i++) {
    let char = braces[i] 
    if (char == '(' || char == "{" || char == "[" ){
      stack.push(char)
    } else {
      if (!stack.length ||
          (char === ')' && stack[stack.length - 1] !== '(') ||
          (char === '}' && stack[stack.length - 1] !== '{') ||
          (char === ']' && stack[stack.length - 1] !== '[')) {
                return false;
    }
      stack.pop();
  }
}
  return stack.length == 0
  }
