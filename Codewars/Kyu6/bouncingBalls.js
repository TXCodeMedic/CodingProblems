function bouncingBall(h,  bounce,  window) {
  //check for valid criteria
  if (( h > 0) && ((bounce > 0) && (bounce < 1)) && (window < h)) {
    var count = 0
    while (h > window) {
      // falling down
      count++
      h = h * bounce
      // bouncing back up
      if (h > window) {
        count++
      }
    }
  } else {
    return -1
  }
  return count
}
