// const apiKey = "pub_f6d62b45913148c3bee350a618069981";
const apiKey = "684418efa9274f3ad6491868b0271123";
let city = "Kabul";
const cityName = document.getElementById("cityName");
const btn = document.getElementById("btn");

if (cityName.value !== "") {
  city = cityName.value;
}
const divParint = document.getElementById("divParint");
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
fetch(url).then((response) => {
  let data = response.json();
  data.then((data) => {
    document.getElementById("humidity").textContent = data.main.humidity + "%";
    document.getElementById("wind-s").textContent =
      Math.floor(data.wind.speed) + "km/h";
    let date = new Date(data.sys.sunrise * 1000);
    document.getElementById("Sunrise").textContent =
      date.getHours() + ":" + date.getMinutes();
    let datesunset = new Date(data.sys.sunset * 1000);
    document.getElementById("Sunset").textContent =
      datesunset.getHours() + ":" + datesunset.getMinutes();

    if (data.weather[0].main === "Clear") {
      const div = document.createElement("div");
      div.classList.add("divapi");
      div.innerHTML = `
      <img src="../img/suny.svg" class="h-[90%]" alt="" />
      <h1>${data.name}</h1>
      `;
      divParint.append(div);
    } else if (data.weather[0].main === "Cloudy") {
      const div = document.createElement("div");
      div.classList.add("divapi");
      div.innerHTML = `
      <img src="../img/partly-cloudy.svg" class="h-[90%]" alt="" />
      <h1>${data.name}</h1>
      `;
      divParint.append(div);
    } else if (data.weather[0].main === "Suny") {
      const div = document.createElement("div");
      div.classList.add("divapi");
      div.innerHTML = `
      <img src=" ../img/cloud-moon.svg" class="h-[90%]" alt="" />
      <h1>${data.name}</h1>
      `;
      divParint.append(div);
    }
  });
});
