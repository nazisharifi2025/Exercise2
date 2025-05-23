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
const button = document.getElementById("button");
const input = document.getElementById("input");
const selectop1 = document.getElementById("selectop1");
const selectop2 = document.getElementById("selectop2");
const div = document.getElementById("div");
let faselaha = {
  kabulqandahar: 501,
  kabulGhazni: 148,
  kabulmazar: 426,
  kabulherat: 1070,
  kabuljalalabad: 149,
};
button.addEventListener("click", () => {
  div.classList.remove("hidden");
  if (
    (selectop1.value === "کابل" && selectop2.value === "غزنی") ||
    (selectop1.value === "غزنی" && selectop2.value === "کابل")
  ) {
    let dis = parseFloat(input.value);
    let time = dis / faselaha.kabulGhazni;
    div.innerHTML = `
    شما از ${selectop1}
    به طرف  ${selectop2}
    با سرعت ${dis}
    در مدت ${time}
    خواهید رسید
    `;
  } else if (
    (selectop1.value === "مزار شریف" && selectop2.value === "کابل") ||
    (selectop1.value === "کابل" && selectop2.value === "مزار شریف")
  ) {
    let dis = parseInt(input.value);
    let time = dis / faselaha.kabulmazar;
    console.log(time);
  } else if (
    (selectop1.value === "کابل", selectop2.value === "هرات") ||
    (selectop1.value === "هرات", selectop2.value === "کابل")
  ) {
    let dis = parseInt(input.value);
    let time = dis / faselaha.kabulherat;
    console.log(time);
  } else if (
    (selectop1.value === "کابل", selectop2.value === "قندهار") ||
    (selectop1.value === "قندهار", selectop2.value === "کابل")
  ) {
    let dis = parseInt(input.value);
    let time = dis / faselaha.kabulqandahar;
    console.log(time);
  } else if (
    (selectop1.value === "کابل" && selectop2.value === "جلال آباد") ||
    (selectop1.value === "جلال آباد" && selectop2.value === "کابل")
  ) {
    let dis = parseInt(input.value);
    let time = dis / faselaha.kabuljalalabad;
    console.log(time);
  }
});
