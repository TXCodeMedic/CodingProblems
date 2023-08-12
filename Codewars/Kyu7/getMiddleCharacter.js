function getMiddle(s) {
  if (s.length % 2 != 0) {
    // odd
    return s[Math.floor(s.length/2)]
  } else {
    // even
    console.log('even')
    return s[Math.floor(s.length/2) - 1] + s[Math.floor(s.length/2)]
  }
}
