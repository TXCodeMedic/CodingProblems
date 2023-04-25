function humanReadable(seconds) {
 var hours = Math.floor(seconds / (60 * 60))
 seconds -= (hours * (60 * 60))
 var mins = Math.floor(seconds / 60)
 seconds -= (mins * 60)
 var secs = seconds

 hours = hours.toString()
 mins = mins.toString()
 secs = secs.toString()
 var time = [hours, mins, secs]

 for (let i = 0; i < time.length; i++) {
  if (time[i].length == 1) {
   time[i] = "0" + time[i]
  }
 }

 return time[0] + ":" + time[1] + ":" + time[2]
}