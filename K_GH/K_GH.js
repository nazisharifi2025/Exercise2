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
const btn = document.getElementById("btn");
const divshoing = document.getElementById("divshoing");
const divhidden = document.getElementById("divHidden");
const body = document.getElementById("body");
btn.addEventListener("click", () => {
  const inputsh = document.getElementById("inputsh").value;
  if (inputsh === "paper") {
    alert("You Won");
    divhidden.classList.add("hidden");
    divshoing.classList.remove("hidden");
    divshoing.classList.add("flex");
    body.classList.remove("bg-gray-100");
  } else {
    alert("Trye Agin");
  }
});

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
  kabulBamian: 204,
};
button.addEventListener("click", () => {
  div.classList.remove("hidden");
  if (
    (selectop1.value === "کابل" && selectop2.value === "غزنی") ||
    (selectop1.value === "غزنی" && selectop2.value === "کابل")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabulGhazni;
    let time = distance / speed;
    div.innerHTML = `
  شما از ${selectop1.value}
  به طرف ${selectop2.value}
  با سرعت ${speed} کیلومتر در ساعت
  در مدت ${time.toFixed(2)} ساعت
  خواهید رسید
  `;
  } else if (
    (selectop1.value === "مزار شریف" && selectop2.value === "کابل") ||
    (selectop1.value === "کابل" && selectop2.value === "مزار شریف")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabulmazar;
    let time = distance / speed;
    div.innerHTML = `
    شما از ${selectop1.value}
    به طرف  ${selectop2.value}
    با سرعت ${speed} کیلو متر
    در مدت ${time.toFixed(2)} ساعت
    خواهید رسید
    `;
  } else if (
    (selectop1.value === "کابل" && selectop2.value === "هرات") ||
    (selectop1.value === "هرات" && selectop2.value === "کابل")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabulherat;
    let time = distance / speed;
    div.innerHTML = `
    شما از ${selectop1.value}
    به طرف  ${selectop2.value}
    با سرعت ${speed} کیلو متر
    در مدت ${time.toFixed(2)} ساعت
    خواهید رسید
    `;
  } else if (
    (selectop1.value === "کابل" && selectop2.value === "قندهار") ||
    (selectop1.value === "قندهار" && selectop2.value === "کابل")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabulqandahar;
    let time = distance / speed;
    div.innerHTML = `
    شما از ${selectop1.value}
    به طرف  ${selectop2.value}
    با سرعت ${speed} کیلو متر
    در مدت ${time.toFixed(2)} ساعت
    خواهید رسید
    `;
  } else if (
    (selectop1.value === "کابل" && selectop2.value === "جلال آباد") ||
    (selectop1.value === "جلال آباد" && selectop2.value === "کابل")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabuljalalabad;
    let time = distance / speed;
    div.innerHTML = `
    شما از ${selectop1.value}
    به طرف  ${selectop2.value}
    با سرعت ${speed} کیلو متر
    در مدت ${time.toFixed(2)} ساعت
    خواهید رسید
    `;
  } else if (
    (selectop1.value === "کابل" && selectop2.value === "بامیان") ||
    (selectop1.value === "بامیان" && selectop2.value === "کابل")
  ) {
    let speed = parseFloat(input.value);
    let distance = faselaha.kabulBamian;
    let time = distance / speed;
    div.innerHTML = `
     شما از ${selectop1.value}
    به طرف  ${selectop2.value}
    با سرعت ${speed} کیلو متر
    در مدت ${time.toFixed(2)} ساعت
    خواهید رسید
    `;
  }
});
