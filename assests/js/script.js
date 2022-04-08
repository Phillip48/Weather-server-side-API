
// Global variables
// const weatherApiUrl = '';
const apiKey = '753a34ec81da704dc4f3b41a1460fc4f';
const searchHistory = [];
var searchBtn = document.getElementById('search-btn');
var inputArea = document.getElementById('input-area');
var cityName = document.getElementById('input-area');
var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=753a34ec81da704dc4f3b41a1460fc4f`


//===========//

// Days.js time
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

// Url reguest for weather data
function weatherData(location) {
    var {lat} = location;
    var {lon} = location;
    var apiUrl = `${weatherApiUrl}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
    fetch(weatherApiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            renderItems(city, data);
        })
}

weatherData(weatherApiUrl);

// Event listner for search button 
function userResponse() {
    var userInput = inputArea;
console.log(userInput);
    var userValue = inputArea.value.trim();
    console.log(inputArea);
    //Replace ${city} in url with user input
    //inputArea.replace(weatherApiUrl.cityName)

    // Create element to add data from weather api to the web page
    // append element 
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
    // empty string to push into

    // for loop go through history array, setattr
}

function updateLocal(search) {
    // update localstorage, 
    //JSON strinify to turn search history into json format
}

function pullHistory() {
    //pull history from local storage
    //json parse whatever is stringified
}

function displayWeatherData() {
    // display current weather
    // temp, wind speed, etc. Element for variables. setattr= UV INDEX
}

function forecast() {
    // 5 day forecast 
    // cardTitle.textContent = dayjs.unix(unixTs).tz(timezone).format('M/D/YYYY');
}


searchBtn.addEventListener('click', JSON.stringify(userResponse));