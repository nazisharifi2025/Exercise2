const clickMe = document.getElementById("clickme");
const flex = document.getElementById("flex");
const hidden = document.getElementById("hidden");
clickMe.addEventListener("click", () => {
  flex.classList.remove("hidden");
  hidden.classList.add("hidden");
  clickMe.classList.add("hidden");
});
flex.addEventListener("click", () => {
  flex.classList.add("hidden");
  hidden.classList.remove("hidden");
  clickMe.classList.remove("hidden");
});
