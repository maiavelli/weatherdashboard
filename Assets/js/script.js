//global variables
//form variables
var submitBtn = document.getElementById('submitBtn');
var inputValue = document.getElementById('inputVal');

//current weather section variables
var nameEl = document.getElementById('city-name');
var dateEl = document.getElementById('todays-date');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var uvEl = document.getElementById('uv-index');

//5 day forecast section variables
//day one
var dayOneTemp = document.getElementById('dayOneTemp');
var dayOneWind = document.getElementById('dayOneWind');
var dayOneHumidity = document.getElementById('dayOneHumidity');

//day two
var dayTwoTemp = document.getElementById('day2Temp');
var dayTwoWind = document.getElementById('day2Wind');
var dayTwoHumidity = document.getElementById('day2Humidity');

//day three
var dayThreeTemp = document.getElementById('day3Temp');
var dayThreeWind = document.getElementById('day3Wind');
var dayThreeHumidity = document.getElementById('day3Humidity');

//day four
var dayFourTemp = document.getElementById('day4Temp');
var dayFourWind = document.getElementById('day4Wind');
var dayFourHumidity = document.getElementById('day4Humidity');

//day five
var dayFiveTemp = document.getElementById('day5Temp');
var dayFiveWind = document.getElementById('day5Wind');
var dayFiveHumidity = document.getElementById('day5Humidity');

//fetch current and 5 day weather info on submit
submitBtn.addEventListener("click", getCurrentWeather);
submitBtn.addEventListener("click", getFiveDay);

function getCurrentWeather() {

//current weather API URL variable
var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=a1ea2d115b65763a8f4c1ffbff212f2d&units=imperial";

//fetch current weather data via URL
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

    //five day forecast API URL variable
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + "&appid=a1ea2d115b65763a8f4c1ffbff212f2d&units=imperial";

    //fetch five day forecast via URL
    fetch(fiveDayURL)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
            console.log(data);

            //day one data 
            var dayOneTempVal = data['list'][1]['main']['temp'];
            var dayOneHumidityVal = data ['list'][1]['main']['humidity'];
            var dayOneWindVal = data['list'][1]['wind']['speed'];
            console.log(dayOneTempVal);
            console.log(dayOneHumidityVal);
            console.log(dayOneWindVal);

            //display in html
            dayOneTemp.textContent = "temp: " + dayOneTempVal + " °F";
            dayOneWind.textContent = "wind: " + dayOneWindVal + " mph";
            dayOneHumidity.textContent = "humidity: " + dayOneHumidityVal + " %";

            //day two data 
            var dayTwoTempVal = data['list'][2]['main']['temp'];
            var dayTwoHumidityVal = data ['list'][2]['main']['humidity'];
            var dayTwoWindVal = data['list'][2]['wind']['speed'];

            //display in html
            dayTwoTemp.textContent = "temp: " + dayTwoTempVal + " °F";
            dayTwoWind.textContent = "wind: " + dayTwoWindVal + " mph";
            dayTwoHumidity.textContent = "humidity: " + dayTwoHumidityVal + " %";

            //day three data
            var dayThreeTempVal = data['list'][3]['main']['temp'];
            var dayThreeHumidityVal = data ['list'][3]['main']['humidity'];
            var dayThreeWindVal = data['list'][3]['wind']['speed'];

            //display in html
            dayThreeTemp.textContent = "temp: " + dayThreeTempVal + " °F";
            dayThreeWind.textContent = "wind: " + dayThreeWindVal + " mph";
            dayThreeHumidity.textContent = "humidity: " + dayThreeHumidityVal + " %";

            //day four data
            var dayFourTempVal = data['list'][4]['main']['temp'];
            var dayFourHumidityVal = data ['list'][4]['main']['humidity'];
            var dayFourWindVal = data['list'][4]['wind']['speed'];

            //display in html
            dayFourTemp.textContent = "temp: " + dayFourTempVal + " °F";
            dayFourWind.textContent = "wind: " + dayFourWindVal + " mph";
            dayFourHumidity.textContent = "humidity: " + dayFourHumidityVal + " %";

            //day five data
            var dayFiveTempVal = data['list'][5]['main']['temp'];
            var dayFiveHumidityVal = data ['list'][5]['main']['humidity'];
            var dayFiveWindVal = data['list'][5]['wind']['speed'];

            //display in html
            dayFiveTemp.textContent = "temp: " + dayFiveTempVal + " °F";
            dayFiveWind.textContent = "wind: " + dayFiveWindVal + " mph";
            dayFiveHumidity.textContent = "humidity: " + dayFiveHumidityVal + " %";


    });

}