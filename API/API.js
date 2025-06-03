// const apiKey = "pub_f6d62b45913148c3bee350a618069981";
const apiKey = "684418efa9274f3ad6491868b0271123";
let city = "Kabul";
const cityName = document.getElementById("cityName");
const btn = document.getElementById("btn");
if (cityName.value !== "") {
  city = cityName.value;
}
const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}`;
