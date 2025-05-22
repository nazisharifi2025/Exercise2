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
const input = document.getElementById("input");
const selectop1 = document.getElementById("selectop1");
const selectop2 = document.getElementById("selectop2");
