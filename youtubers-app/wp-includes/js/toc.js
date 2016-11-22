$(document).ready(function () {

  if (window.location.pathname && window.location.pathname == '?117') {
    window.location.assign("/index.html@p=117.html")
  } else {
    console.log("current location path: " + window.location.pathname)      
  }
})
