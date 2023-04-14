function displayCity(response) {
  let mainTemp = Math.round(response.data.main.temp);
  let high = Math.round(response.data.main.temp_max);
  let low = Math.round(response.data.main.temp_min);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = mainTemp;
  document.querySelector("#highTemp").innerHTML = `H: ${high}°`;
  document.querySelector("#lowTemp").innerHTML = `L: ${low}°`;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function inputCity(city) {
  let apiKey = "517e54c5799d5c5a8f5cb85a0b71b91a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCity);
}

function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city").value;
  inputCity(city);
}

document.querySelector("#show-city").addEventListener("submit", submitCity);

function displayLocation(position) {
  let apiKey = "517e54c5799d5c5a8f5cb85a0b71b91a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayCity);
}
function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayLocation);
}
let current = document.querySelector("#currentLocation");
current.addEventListener("click", showPosition);
inputCity("Hanau");

function currentDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentDay = date.getDay();
  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let day = days[currentDay];
  return `${day}, ${hours}:${minutes}`;
}
let p = document.querySelector("p#date");
let now = new Date();
p.innerHTML = currentDate(now);

function celsiusToFahrenheit(event) {
  event.preventDefault();
  let tempFahrenheit = document.querySelector("#temperature");
  tempFahrenheit.innerHTML = 8;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", celsiusToFahrenheit);

function fahrenheitToCelsius(event) {
  event.preventDefault();
  let tempCelsius = document.querySelector("#temperature");
  let fahrenheitUnit = tempCelsius.innerHTML;
  tempCelsius.innerHTML = Math.round((fahrenheitUnit * 9) / 5 + 32);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", fahrenheitToCelsius);
