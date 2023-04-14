// API test 

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46ec91edfamsha29a55941a3542ep1e87d3jsnda41a129c003',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/tampa', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));

