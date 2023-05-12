const apiKey = 'e5a1d97bc8356ed58447c8ca8a0d95af'; // Replace with your OpenWeatherMap API key

// Function to fetch weather data from the API
async function getWeatherData(city) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
}

// Function to update the weather information on the page
function updateWeatherData(weatherData) {
  const weatherElement = document.getElementById('weather-data');
  if (weatherData) {
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    const location = weatherData.name;

    weatherElement.innerHTML = `
      <h2>${location}</h2>
      <p>Temperature: ${temperature} &#8451;</p>
      <p>Description: ${description}</p>
    `;
  } else {
    weatherElement.innerHTML = '<p>Weather data not found.</p>';
  }
}

// Function to handle the button click event
function handleButtonClick() {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value;
  getWeatherData(city)
    .then((data) => {
      updateWeatherData(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });
}

// Add event listener to the button
const getWeatherButton = document.getElementById('get-weather-btn');
getWeatherButton.addEventListener('click', handleButtonClick);

