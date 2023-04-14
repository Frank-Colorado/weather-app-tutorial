// API test 
// Need: data.temp, data.temp_min, data.temp_max, data.weather[0].main

const searchInput = document.getElementById('city-input')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46ec91edfamsha29a55941a3542ep1e87d3jsnda41a129c003',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

// This is a function called getWeather.
// It has 1 parameter called 'city' 
const getWeather = (city) => {
fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
}




// This is a function called searchCity. 
// It has 0 parameter
// It will be called when the 'Search' btn is clicked
// It will define a variable called 'search' which uses 'searchInput.value' as its value
// It will then call the 'getWeather' function and use 'search' as a parameter
const searchCity = () => {
        let search = searchInput.value 
        getWeather(search.toLowerCase())
    }