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


//fetch current and 5 day weather info on submit
submitBtn.addEventListener("click", getCurrentWeather);
submitBtn.addEventListener("click", getFiveDay);

function getCurrentWeather() {

var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a1ea2d115b65763a8f4c1ffbff212f2d&units=imperial";

    fetch(currentWeatherURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        //capture specific data metrics
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];
        console.log(nameValue);
        console.log(tempValue);
        console.log(windValue);
        console.log(humidityValue);

        //display in HTML
        nameEl.innerHTML = nameValue;
        tempEl.textContent = "temperature: " + tempValue + " degrees";
        windEl.textContent = "wind: " + windValue + " mph";
        humidityEl.textContent = "humidity: " + humidityValue + " percent";
        }) 
};

function getFiveDay() {

}