var countBits = function(n) {
  n = n.toString(2).replace(/0/g, "").split("")
  let count = 0
  
  for (let i = 0; i < n.length; i++) {
    count += parseInt(n[i])
  }
  return count
};
