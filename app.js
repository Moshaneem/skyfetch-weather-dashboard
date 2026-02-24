const API_KEY = "0ab9103e9c67b8dc0515dd5d61b4b88b";
const CITY = "London"; // change if you want

const cityEl = document.getElementById("city");
const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("description");
const iconEl = document.getElementById("icon");

async function fetchWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(url);

    const data = response.data;

    cityEl.textContent = data.name;
    tempEl.textContent = `Temperature: ${data.main.temp}°C`;
    descEl.textContent = `Condition: ${data.weather[0].description}`;
    iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  } catch (error) {
    cityEl.textContent = "City not found / API error";
    console.error(error);
  }
}

fetchWeather();