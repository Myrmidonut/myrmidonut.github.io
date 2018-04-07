var apiUrl = "https://api.forismatic.com/api/1.0/";
var request = new XMLHttpRequest();
request.open("GET", apiUrl);
request.responseType = "json";
request.send();
request.onload = function() {
  var response = request.response;
  console.log(response);
}