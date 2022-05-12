//global variables
//form variables
var submitBtn = document.getElementById('submitBtn');
var inputValue = document.getElementById('inputVal');

//current weather section variables
var nameEl = document.getElementById('city-name');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var uvEl = document.getElementById('uv-index');


//fetch current weather info
submitBtn.addEventListener("click", getCurrentWeather);

function getCurrentWeather() {

var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a1ea2d115b65763a8f4c1ffbff212f2d";

    fetch(currentWeatherURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        })
};