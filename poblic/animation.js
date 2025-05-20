const clickMe = document.getElementById("clickme");
const body = document.querySelector("body");
const flex = document.getElementById("flex");
const hidden = document.getElementById("hidden");
clickMe.addEventListener("click", () => {
  flex.classList.remove("hidden");
  hidden.classList.add("hidden");
  clickMe.classList.add("hidden");
  body.classList.remove("mx-auto");
});
flex.addEventListener("click", () => {
  flex.classList.add("hidden");
  hidden.classList.remove("hidden");
  clickMe.classList.remove("hidden");
});
