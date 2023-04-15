// API test
// Need: data.temp, data.temp_min, data.temp_max, data.weather[0].main

const searchInput = document.getElementById("city-input");
const city = document.getElementById('city-name')
const weatherType = document.getElementById('weather-type')
const temp = document.getElementById('temp')
const tempMin = document.getElementById('min-temp')
const tempMax = document.getElementById('max-temp')

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "46ec91edfamsha29a55941a3542ep1e87d3jsnda41a129c003",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

// This is a function called 'getWeather'.
// It has 1 parameter called 'city'
// This function will fetch data from the 'Open Weather' API and pass the parameter city into the URL
// The response recieved will then be converted into json data.
// A variable called 'weather' will then use the json data as its value. 
// The 'displayWeatherData' function will then be called using the variable 'weather' as a parameter 
const getWeather = (city) => {
  fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => {
      const weather = data;
      displayWeatherData(weather);
    })
    .catch((err) => console.error(err));
};


// This is a function called 'displayWeatherData'.
// It has 1 parameter called 'data'
// The function will go through and set multiple DOM elements inner text to different values of the parameter 'data'
const displayWeatherData = (data) => {
    city.innerText = data.name
    weatherType.innerText = data.weather[0].main
    temp.innerText = data.main.temp
    tempMin.innerText = data.main.temp_min
    tempMax.innerText = data.main.temp_max
};

// This is a function called 'searchCity'.
// It has 0 parameter
// It will be called when the 'Search' btn is clicked
// It will define a variable called 'search' which uses 'searchInput.value' as its value
// It will then call the 'getWeather' function and use 'search' as a parameter
const searchCity = () => {
  let search = searchInput.value;
  getWeather(search);
};
