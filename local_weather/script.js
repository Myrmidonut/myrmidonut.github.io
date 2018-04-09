var url;
var latitude;
var longitude;
var celsius = true;
var temperature;
var fahrenheit;

var urlSummer = "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
var urlSpring = "https://images.pexels.com/photos/46164/field-of-rapeseeds-oilseed-rape-blutenmeer-yellow-46164.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
var urlAutumn = "https://images.pexels.com/photos/34001/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260";
var urlWinter = "https://images.pexels.com/photos/325139/pexels-photo-325139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

// Latitude: 47.0804206
// Longitude: 15.4354491

$(document).ready(function(){
  getPosition();
});

function createUrl() {
  url = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
  console.log(url);
}

function getData() {
  $.getJSON(url, function(e) {
    temperature = e.main.temp;
    
    $("#location").text(e.name);
    $("#temperature").text(Math.floor( temperature * 10 ) / 10 + " C");
    $("#sky").text(e.weather[0].description);
    $("#windspeed").text(e.wind.speed + " knots");
    $("#image").html("<img src=" + e.weather[0].icon + '">');
    
    if (temperature >= 20) {
      $("main").css("background-image", "url(" + urlSummer + ")");
    } else if (temperature >= 10 && temperature < 20) {
      $("main").css("background-image", "url(" + urlSpring + ")");
    } else if (temperature >= 0 && temperature < 10) {
      $("main").css("background-image", "url(" + urlAutumn + ")");
    } else {
      $("main").css("background-image", "url(" + urlWinter + ")");
    }
  });
}

function getPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(e) {
      console.log(`Latitude : ${e.coords.latitude}`);
      console.log(`Longitude: ${e.coords.longitude}`);
      latitude = e.coords.latitude;
      longitude = e.coords.longitude;
      
      createUrl();
      getData()
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

$("#temperature").on("click", function() {
  if (temperature != undefined) {
    if (celsius == true) {
      fahrenheit = Math.floor( (temperature * 1.8 + 32) * 10 ) / 10;
      $("#temperature").text(fahrenheit + " F");
      celsius = false;
    } else {
      $("#temperature").text(Math.floor( temperature * 10 ) / 10 + " C");
      celsius = true;
    }
  }
})

function debug() {
  //celsius = true;
  latitude = 47;
  longitude = 15;
  createUrl();
  getData();
}