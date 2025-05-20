const masseg = document.getElementById("masseg");
const text = document.getElementById("text");
const clickme = document.getElementById("clickme");
const matn = document.getElementById("matn");
clickme.addEventListener("click", () => {
  text.select(); // اینجا اصلاح شده
  text.setSelectionRange(0, 99999); // برای موبایل

  document.execCommand("copy");
  masseg.classList.remove("hidden");
  masseg.classList.add("flex");
  setInterval(() => {
    masseg.classList.add("hidden");
    masseg.classList.remove("flex");
  }, 2000);
});
