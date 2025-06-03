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
fetch(url).then((respons) => {
  let data = respons.json();
  data.then((data) => {
    if (data.weather[0].main === "clear") {
      const div = document.createElement("div");
      div.classList.add("divapi");
      div.innerHTML = `
      <img src="../img/cloud-moon.svg" class="h-[80%]" alt="" />
      <h1>${deta.name}</h1>
      `;
      divParint.append(div);
    }
  });
});
