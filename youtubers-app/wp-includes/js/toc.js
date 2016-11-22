$(document).ready(function () {

  if (window.location.search && window.location.search == '?page_id=117') {
    window.location = "index.html@p=117.html"
  } else {
    console.log("current location path: " + window.location.pathname)
  }
})
