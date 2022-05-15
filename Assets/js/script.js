//global variables
//form variables
var submitBtn = document.getElementById('submitBtn');
var inputValue = document.getElementById('inputVal');
var searchBar = document.getElementById('searchBar');
var recentOne = document.getElementById('recentOne');

//current weather section variables
var nameEl = document.getElementById('city-name');
var dateEl = document.getElementById('todays-date');
var tempEl = document.getElementById('temp');
var windEl = document.getElementById('wind');
var humidityEl = document.getElementById('humidity');
var uvEl = document.getElementById('uv-index');
var today = document.getElementById('todays-date');

//display current date
const date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
console.log(date);
today.textContent = date;

//5 day forecast section variables
//day one
//date variables
var dayOneDate = document.getElementById('dayOneDate');
var dayOne = new Date();
dayOne.setDate(dayOne.getDate() + 1);
console.log(dayOne);
//weather variables
var dayOneTemp = document.getElementById('dayOneTemp');
var dayOneWind = document.getElementById('dayOneWind');
var dayOneHumidity = document.getElementById('dayOneHumidity');
var dayOneIcon = document.getElementById('dayOneIcon');

//day two
//date variables
var dayTwoDate = document.getElementById('dayTwoDate');
var dayTwo = new Date();
dayTwo.setDate(dayTwo.getDate() + 2);
console.log(dayTwo);
//weather variables
var dayTwoTemp = document.getElementById('day2Temp');
var dayTwoWind = document.getElementById('day2Wind');
var dayTwoHumidity = document.getElementById('day2Humidity');
var dayTwoIcon = document.getElementById('dayTwoIcon');

//day three
//date variables
var dayThreeDate = document.getElementById('dayThreeDate');
var dayThree = new Date();
dayThree.setDate(dayThree.getDate() + 3);
console.log(dayThree);
//weather variables
var dayThreeTemp = document.getElementById('day3Temp');
var dayThreeWind = document.getElementById('day3Wind');
var dayThreeHumidity = document.getElementById('day3Humidity');
var dayThreeIcon = document.getElementById('dayThreeIcon');

//day four
//date variables
var dayFourDate = document.getElementById('dayFourDate');
var dayFour = new Date();
dayFour.setDate(dayFour.getDate() + 4);
console.log(dayFour);
//weather variables
var dayFourTemp = document.getElementById('day4Temp');
var dayFourWind = document.getElementById('day4Wind');
var dayFourHumidity = document.getElementById('day4Humidity');
var dayFourIcon = document.getElementById('dayFourIcon');

//day five
//date variables
var dayFiveDate = document.getElementById('dayFiveDate');
var dayFive = new Date();
dayFive.setDate(dayFive.getDate() + 5);
console.log(dayFive);
//weather variables
var dayFiveTemp = document.getElementById('day5Temp');
var dayFiveWind = document.getElementById('day5Wind');
var dayFiveHumidity = document.getElementById('day5Humidity');
var dayFiveIcon = document.getElementById('dayFiveIcon');

//fetch current and 5 day weather info on submit
submitBtn.addEventListener("click", getCurrentWeather);
submitBtn.addEventListener("click", getFiveDay);

submitBtn.addEventListener("click", saveLocal);

function saveLocal() {
    var input = inputValue.value;
    localStorage.setItem("city", input);
}

window.onload = function reload() {
    recentOne.textContent = localStorage.getItem("city");
    recentOne.classList.remove('is-hidden');
}


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
            var dayOneIconVal = data['list'][1]['weather'][0]['icon'];
            console.log(dayOneTempVal);
            console.log(dayOneHumidityVal);
            console.log(dayOneWindVal);
            console.log(dayOneIconVal);

            //display in html
            dayOneDate.textContent = dayOne.toLocaleDateString('en-us', { weekday:"short", month:"short", day:"numeric"});
            dayOneTemp.textContent = "temp: " + dayOneTempVal + " °F";
            dayOneWind.textContent = "wind: " + dayOneWindVal + " mph";
            dayOneHumidity.textContent = "humidity: " + dayOneHumidityVal + " %";
            dayOneIcon.src = "http://openweathermap.org/img/wn/" + dayOneIconVal + "@2x.png";

            //day two data 
            var dayTwoTempVal = data['list'][2]['main']['temp'];
            var dayTwoHumidityVal = data ['list'][2]['main']['humidity'];
            var dayTwoWindVal = data['list'][2]['wind']['speed'];
            var dayTwoIconVal = data['list'][2]['weather'][0]['icon'];

            //display in html
            dayTwoDate.textContent = dayTwo.toLocaleDateString('en-us', { weekday: "short", month:"short", day:"numeric"});
            dayTwoTemp.textContent = "temp: " + dayTwoTempVal + " °F";
            dayTwoWind.textContent = "wind: " + dayTwoWindVal + " mph";
            dayTwoHumidity.textContent = "humidity: " + dayTwoHumidityVal + " %";
            dayTwoIcon.src = "http://openweathermap.org/img/wn/" + dayTwoIconVal + "@2x.png";

            //day three data
            var dayThreeTempVal = data['list'][3]['main']['temp'];
            var dayThreeHumidityVal = data ['list'][3]['main']['humidity'];
            var dayThreeWindVal = data['list'][3]['wind']['speed'];
            var dayThreeIconVal = data['list'][3]['weather'][0]['icon'];

            //display in html
            dayThreeDate.textContent = dayThree.toLocaleDateString('en-us', { weekday: "short", month:"short", day:"numeric"});
            dayThreeTemp.textContent = "temp: " + dayThreeTempVal + " °F";
            dayThreeWind.textContent = "wind: " + dayThreeWindVal + " mph";
            dayThreeHumidity.textContent = "humidity: " + dayThreeHumidityVal + " %";
            dayThreeIcon.src = "http://openweathermap.org/img/wn/" + dayThreeIconVal + "@2x.png";

            //day four data
            var dayFourTempVal = data['list'][4]['main']['temp'];
            var dayFourHumidityVal = data ['list'][4]['main']['humidity'];
            var dayFourWindVal = data['list'][4]['wind']['speed'];
            var dayFourIconVal = data['list'][4]['weather'][0]['icon'];

            //display in html
            dayFourDate.textContent = dayFour.toLocaleDateString('en-us', { weekday: "short", month:"short", day:"numeric"});
            dayFourTemp.textContent = "temp: " + dayFourTempVal + " °F";
            dayFourWind.textContent = "wind: " + dayFourWindVal + " mph";
            dayFourHumidity.textContent = "humidity: " + dayFourHumidityVal + " %";
            dayFourIcon.src = "http://openweathermap.org/img/wn/" + dayFourIconVal + "@2x.png";

            //day five data
            var dayFiveTempVal = data['list'][5]['main']['temp'];
            var dayFiveHumidityVal = data ['list'][5]['main']['humidity'];
            var dayFiveWindVal = data['list'][5]['wind']['speed'];
            var dayFiveIconVal = data['list'][5]['weather'][0]['icon'];

            //display in html
            dayFiveDate.textContent = dayFive.toLocaleDateString('en-us', { weekday: "short", month:"short", day:"numeric"});
            dayFiveTemp.textContent = "temp: " + dayFiveTempVal + " °F";
            dayFiveWind.textContent = "wind: " + dayFiveWindVal + " mph";
            dayFiveHumidity.textContent = "humidity: " + dayFiveHumidityVal + " %";
            dayFiveIcon.src = "http://openweathermap.org/img/wn/" + dayFiveIconVal + "@2x.png";
    });

}