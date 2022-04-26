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
      temp.textContent = weatherResults.current.temp;
      windSpeed.textContent = weatherResults.current.wind_speed;
      humidity.textContent = weatherResults.current.humidity;
      uvIndex.textContent = weatherResults.current.uvi;
      
      var dailyTemp = document.getElementById('dailytemp');
      var dailyWindSpeed = document.getElementById('dailywindSpeed');
      var dailyHumidity = document.getElementById('dailyhumidity');

      dailyTemp.textContent = weatherResults.daily[0].temp;
      dailyWindSpeed.textContent = weatherResults.daily.wind_speed;
      dailyHumidity.textContent = weatherResults.daily.humidity;
      // display current weather
    });
}

// Event listner for search button
function userResponse(event) {
  event.preventDefault();
  var userInput = inputArea;
  var userValue = inputArea.value.trim();
  //var addHistory = userValue.push(searchHistory)

  // if statement to make sure user inputs text
  if (userValue === "") {
    window.alert("Please enter a value");
  } else {
    weatherData(userValue);
    userValue.textContent = document.getElementById('city-input')
  }
  displayHistory();
}

function displayHistory(search) {
  inputArea.innerHTML = "";
  // empty string to push into //searchHistory-already created
  var addHistory = localStorage.getItem("searchHistory");

  if (addHistory != undefined) {
    searchHistory = JSON.parse(addHistory);
  }
  searchHistory.push(search);

  // for loop go through history array, setattr
  for (let i = searchHistory.length - 1; i >= 0; i--) {
    var forHistory = searchHistory[i];

    var previousSearch = document.createElement("button");
    previousSearch.textContent = forHistory;

    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    //searchHistoryContainer.append(forHistory);
  }
  //console.log(forHistory);
  //console.log(searchHistory);
}

searchBtn.addEventListener("click", userResponse);
