// Global variables
const apiKey = "753a34ec81da704dc4f3b41a1460fc4f";
var searchHistory = [];
var searchBtn = document.getElementById("search-btn");
var inputArea = document.getElementById("input-area");
var searchHistoryContainer = document.getElementById("search-history-container");
var todayWeather = document.getElementById("today");
var forecastWeather = document.getElementById("forecast");

//===========//

// Days.js time
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function forecast() {
  // 5 day forecast
  // const today = new Date()
  // const tomorrow = new Date(today);
  // let dateCard = tomorrow.setDate(tomorrow.getDate() + 1)
  // let cardTitle = document.getElementById('future-date')
  // cardTitle.textContent = datecard;
  cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format("M/D/YYYY");


}

function renderItems(city, data) {
  //displayWeatherData(city, data.current, data.timezone);
  forecast(data.daily, data.timezone);
}

// Url request for weather data
function weatherData(city) {
  var cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  inputArea.textContent = document.getElementById("city-input")
  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (regularResponse) {
      var lat = regularResponse[0].lat;
      var lon = regularResponse[0].lon;
      console.log(lat, lon);
      displayWeatherData(lat, lon);
    });
}

function displayWeatherData(lat, lon) {
  var coorUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
  console.log(coorUrl);
  fetch(coorUrl)
    .then(function (weatherData) {
      return weatherData.json();
    })
    .then(function (weatherResults) {
      let cityName = document.getElementById('input-area')
      cityName = cityName.value;

      let citySpan = document.getElementById('city-input')
      var temp = document.getElementById('temp');
      var windSpeed = document.getElementById('windSpeed');
      var humidity = document.getElementById('humidity');
      var uvIndex = document.getElementById('uvIndex');

      citySpan.append(cityName)
      temp.textContent = weatherResults.current.temp + "°F";
      windSpeed.textContent = weatherResults.current.wind_speed + "MPH";
      humidity.textContent = weatherResults.current.humidity + "%";
      uvIndex.textContent = weatherResults.current.uvi;

      // card 1
      var dailyTemp1 = document.getElementById('dailytemp');
      var dailyWindSpeed1 = document.getElementById('dailywindSpeed');
      var dailyHumidity1 = document.getElementById('dailyhumidity');

      dailyTemp1.textContent = weatherResults.daily[0].temp.day + " °F";
      dailyWindSpeed1.textContent = weatherResults.daily[0].wind_speed + " MPH";
      dailyHumidity1.textContent = weatherResults.daily[0].humidity + " %";

      // card 2
      var dailyTemp2 = document.getElementById('dailytemp2');
      var dailyWindSpeed2 = document.getElementById('dailywindSpeed2');
      var dailyHumidity2 = document.getElementById('dailyhumidity2');

      dailyTemp2.textContent = weatherResults.daily[1].temp.day + " °F";
      dailyWindSpeed2.textContent = weatherResults.daily[1].wind_speed + " MPH";
      dailyHumidity2.textContent = weatherResults.daily[1].humidity + " %";

      // card 3
      var dailyTemp3 = document.getElementById('dailytemp3');
      var dailyWindSpeed3 = document.getElementById('dailywindSpeed3');
      var dailyHumidity3 = document.getElementById('dailyhumidity3');

      dailyTemp3.textContent = weatherResults.daily[2].temp.day + " °F";
      dailyWindSpeed3.textContent = weatherResults.daily[2].wind_speed + " MPH";
      dailyHumidity3.textContent = weatherResults.daily[2].humidity + " %";

      // card 4
      var dailyTemp4 = document.getElementById('dailytemp4');
      var dailyWindSpeed4 = document.getElementById('dailywindSpeed4');
      var dailyHumidity4 = document.getElementById('dailyhumidity4');

      dailyTemp4.textContent = weatherResults.daily[3].temp.day + " °F";
      dailyWindSpeed4.textContent = weatherResults.daily[3].wind_speed + " MPH";
      dailyHumidity4.textContent = weatherResults.daily[3].humidity + " %";

      // card 5
      var dailyTemp5 = document.getElementById('dailytemp5');
      var dailyWindSpeed5 = document.getElementById('dailywindSpeed5');
      var dailyHumidity5 = document.getElementById('dailyhumidity5');

      dailyTemp5.textContent = weatherResults.daily[4].temp.day + " °F";
      dailyWindSpeed5.textContent = weatherResults.daily[4].wind_speed + " MPH";
      dailyHumidity5.textContent = weatherResults.daily[4].humidity + " %";
      // display current weather
    });
}

// Event listner for search button
function userResponse(event) {
  event.preventDefault();
  // var userInput = inputArea;
  var userValue = inputArea.value.trim();

  // if statement to make sure user inputs text
  if (userValue === "") {
    window.alert("Please enter a value");
  } else {
    weatherData(userValue);
    // forecast();
    displayHistory(userValue);
    // userValue.textContent = document.getElementById('city-input')
  }
}

function displayHistory(userValue) {
  // empty string to push into //searchHistory-already created

  var previousSearch = document.createElement("button");
  // previousSearch = userValue;3
  previousSearch.append(userValue);
  searchHistoryContainer.append(previousSearch);



  // var addHistory = localStorage.getItem("searchHistory");

  // if (addHistory != undefined) {
  //   searchHistory = JSON.parse(addHistory);
  // }
  // searchHistory.push(search);

  // // for loop go through history array, setattr
  // for (let i = searchHistory.length - 1; i >= 0; i--) {
  //   var forHistory = searchHistory[i];

  //   var previousSearch = document.createElement("button");
  //   previousSearch.textContent = forHistory;

  //   localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  //   searchHistoryContainer.append(forHistory);
  // }
  // console.log(forHistory);
  // console.log(searchHistory);
}

searchBtn.addEventListener("click", userResponse);
