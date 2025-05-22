const hours = document.getElementById("hou");
const minutes = document.getElementById("min");
const secound = document.getElementById("secon");
setInterval(() => {
  const hours = document.getElementById("hou");
  const minutes = document.getElementById("min");
  const secound = document.getElementById("secon");
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  hours.innerHTML = hour;
  minutes.innerHTML = min;
  secound.innerHTML = sec;
}, 1000);
// ساعت تمومه
// شروع سرعت
const button = document.getElementById("butten");

button.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  const selectop1 = document.getElementById("selectop1").value;
  const selectop2 = document.getElementById("selectop2").value;
});
