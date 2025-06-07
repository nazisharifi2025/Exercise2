const apiKey = "684418efa9274f3ad6491868b0271123";
let city = "Kabul";
const btn = document.getElementById("btn");
console.log(cityName);
function getWeather() {
  const cityName = document.getElementById("cityName").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const divParint = document.getElementById("divParint");
  const divh = document.getElementById("divh");
  divh.classList.remove("hidden");
  divh.classList.add("flex");
  fetch(url).then((response) => {
    divParint.innerHTML = "";
    document.getElementById("humidity").innerHTML = "";
    document.getElementById("Sunrise").innerHTML = "";
    document.getElementById("Sunset").innerHTML = "";
    document.getElementById("wind-s").innerHTML = "";
    let data = response.json();
    data.then((data) => {
      document.getElementById("humidity").textContent =
        data.main.humidity + "%";
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
      } else if (data.weather[0].main === "Clouds") {
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
}
btn.addEventListener("click", getWeather);
