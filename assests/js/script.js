
// Global variables
// const weatherApiUrl = '';
const apiKey = '753a34ec81da704dc4f3b41a1460fc4f';
const searchHistory = [];
var searchBtn = document.getElementById('search-btn');
var inputArea = document.getElementById('input-area');
var cityName = document.getElementById('input-area');
var weatherApiUrl = `http://api.openweathermap.org`

var searchHistoryContainer = document.getElementById('search-history-container')
var todayWeather = document.getElementById('today')
var forecastWeather = document.getElementById('forecast')

//===========//

// Days.js time
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);


function displayWeatherData() {
    // temp, wind speed, etc. Element for variables. setattr= UV INDEX
    //var temp = ;
    //var windSpeed = ;
    //var uvIndex = ;
    // display current weather
}

function forecast() {
    // 5 day forecast 
    cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');
}

function renderItems(city, data) {
    displayWeatherData (city, data.current, data.timezone);
    forecast (data.daily, data.timezone);
}

// Url reguest for weather data
function weatherData(location) {
    var {lat} = location;
    var {lon} = location;
    var city = location.name
    var apiUrl = `${weatherApiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            renderItems(city, data);
            console.log(city, data);
        })
}

weatherData(weatherApiUrl);
// weatherData(location);

// Event listner for search button 
function userResponse() {
    var userInput = inputArea;
console.log(userInput);
    var userValue = inputArea.value.trim();
    console.log(inputArea);
    //Replace ${city} in url with user input
    //inputArea.replace(weatherApiUrl.cityName)
    // if statement to make sure user inputs text
    if (userValue === "") {
        window.alert('Please enter a value');
    } else {
        // get local storage
        JSON.parse(window.localStorage.getItem(userInput));
    }
    // Localstorage to save recent user searches // create button for those searches
    window.localStorage.setItem('city', userInput);
}


function displayHistory() {
    // empty string to push into //searchHistory-already created

    // for loop go through history array, setattr
    for (let i = 0; i < searchHistory.length; i++) {
        var forHistory = searchHistory[index];
        // change variable name
        var previousSearch = document.createElement('button')
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


searchBtn.addEventListener('click', JSON.stringify(userResponse));