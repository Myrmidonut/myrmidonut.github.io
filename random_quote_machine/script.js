
var apiUrl = "https://api.forismatic.com/api/1.0/";
var request = new XMLHttpRequest();
request.open("GET", apiUrl);
request.responseType = "jsonp";
request.send();
request.onload = function() {
  var response = request.response;
  console.log(response);
}


//var test = JSON.parse("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=JSON&lang=en");
//var test = JSON.parse("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback");

//console.log(test);