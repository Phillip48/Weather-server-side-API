// Global variables
const apiKey = "753a34ec81da704dc4f3b41a1460fc4f";
const searchHistory = [];
var searchBtn = document.getElementById("search-btn");
var inputArea = document.getElementById("input-area");
var weatherApiUrl = `https://api.openweathermap.org`;

var searchHistoryContainer = document.getElementById(
  "search-history-container"
);
var todayWeather = document.getElementById("today");
var forecastWeather = document.getElementById("forecast");

//===========//

// Days.js time
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function displayWeatherData() {
  //var temp = ;
  //var windSpeed = ;
  //var humidity = ;
  //var uvIndex = ;
  // display current weather
}

function forecast() {
  // 5 day forecast
  cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format("M/D/YYYY");
}

function renderItems(city, data) {
  displayWeatherData(city, data.current, data.timezone);
  forecast(data.daily, data.timezone);
}

// Url request for weather data
function weatherData() {
  var cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${inputArea.value}&limit=1&appid=${apiKey}`;

  //Error in code...
  //var coorUrl = `${weatherApiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (cityResponse) {
      //lat = cityResponse[0].lat;
      //lon = cityResponse[0].lon;
      //renderItems(city, cityResponse);
      return cityResponse;
    })
    .then(function (regularResponse) {
        var lat = regularResponse[0].lat;
        var lon = regularResponse[0].lon;
        var coorUrl = `${weatherApiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
        fetch(coorUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (coorResponse) {
            console.log(coorResponse);
          });
    });
}

// Event listner for search button
function userResponse() {
  var userInput = inputArea;
  var userValue = inputArea.value.trim();
  //Replace ${city} in url with user input
  //inputArea.replace(weatherApiUrl.cityName)
  // if statement to make sure user inputs text
  if (userValue === "") {
    window.alert("Please enter a value");
  } else {
    // get local storage
    JSON.parse(window.localStorage.getItem(userInput));
  }
  // Localstorage to save recent user searches // create button for those searches
  window.localStorage.setItem("city", userInput);

  weatherData();
}

function displayHistory() {
  // empty string to push into //searchHistory-already created

  // for loop go through history array, setattr
  for (let i = 0; i < searchHistory.length; i++) {
    var forHistory = searchHistory[index];
    // change variable name
    var previousSearch = document.createElement("button");
    previousSearch.textContent = forHistory;

    searchHistoryContainer.append(previousSearch);
  }
}

function updateLocal(search) {
  // update localstorage,
  //JSON strinify to turn search history into json format
}

function pullHistory() {
  //pull history from local storage
  //JSON.parse(window.localStorage.getItem(userInput));
  //json parse whatever is stringified
  //window.localStorage.setItem('city', userInput);
}




searchBtn.addEventListener("click", userResponse);