$.ajaxSetup({
  cache: false
});

$("#buttonNewQuote").on("click", function() {
  getQuote();
})

$("#buttonTwitter").on("click", function() {
  tweet();
})

getQuote();

function getQuote() {
  var quotesondesignUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
  
  $("#quote").fadeOut(500);
  $.getJSON(quotesondesignUrl, function(a) {
    $("#quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
  });
  $("#quote").fadeIn(1000);
}

function tweet() {
  var textToTweet = $("#quote").text();
  var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(textToTweet);
  window.open(tweetLink, '_blank');
}