
// Global variables

// const weatherApiUrl = '';
const apiKey = '753a34ec81da704dc4f3b41a1460fc4f';
const searchHistory = [];
var searchBtn = document.getElementById('search-btn');
var inputArea = document.getElementById('input-area');


// Days.js time
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

var weatherApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=753a34ec81da704dc4f3b41a1460fc4f`

// Url reguest for weather data
function weatherData(weatherApi) {
    fetch(weatherApi)
    .then (function(response) {
        return response.json()
    })
    .then(function (data){
        console.log(data);

    })
}

weatherData(weatherApiUrl);

// Event listner for search button 
searchBtn.addEventListener('click', function() {
    //Replace ${city} in url with user input

    // Create element to add data from weather api to the web page

    // append element 

    // Localstorage to save recent user searches // create button for those searches
    
})