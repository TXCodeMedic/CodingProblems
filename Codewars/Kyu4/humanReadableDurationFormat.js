function formatDuration (seconds) {
  if (seconds == 0) {
    return "now"
  }
  
  var mins = Math.floor(seconds/ 60)
  var secs = seconds - (mins * 60)
  var hours = Math.floor (mins/ 60)
  mins = mins - (hours * 60)
  var days = Math.floor(hours/24)
  hours = hours - (days * 24)
  var years = Math.floor(days/365)
  days = days - (years * 365)
  
  var resultArr = []
  var result = ""
  
  if (years > 0) {
    let yearStr = ""
    yearStr += `${years} year`
    years > 1 ? (yearStr += "s") : (null)
    resultArr.push(yearStr)
  }
  if (days > 0) {
    let dayStr = ""
    dayStr += `${days} day`
    days > 1 ? (dayStr += "s") : (null)
    resultArr.push(dayStr)
  }
  if (hours > 0) {
    let hourStr = ""
    hourStr += `${hours} hour`
    hours > 1 ? (hourStr += "s") : (null)
    resultArr.push(hourStr)
  }
  if (mins > 0) {
    let minStr = ""
    minStr += `${mins} minute`
    mins > 1 ? (minStr += "s") : (null)
    resultArr.push(minStr)
  }
  if (secs > 0) {
    let secStr = ""
    secStr += `${secs} second`
    secs > 1 ? (secStr += "s") : (null)
    resultArr.push(secStr)
  }

  if (resultArr.length <= 2){
    if (resultArr.length > 1) {
      result = `${resultArr[0]} and ${resultArr[1]}`
    } else {
      result = `${resultArr[0]}`
    }
  } else {
    for (let i = 0; i < resultArr.length - 1; i++) {
      result += resultArr[i]
      if ( i != resultArr.length - 2) {
        result += ","
      }
      result += " "
    }
    result += `and ${resultArr[resultArr.length -1]}`
    }
  return result
}

// Refactor Into 
function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");

