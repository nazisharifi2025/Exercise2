const divError = document.getElementById("divError");
const name2 = document.getElementById("name");
const lastName = document.getElementById("lastName");
const number = document.getElementById("number");
const Email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const divParint = document.getElementById("divParint");

btnSave.addEventListener("click", () => {
  if (name2.value.length < 2 || name2.value.length > 10) {
    const div = document.createElement("div");
    div.innerHTML = name2.value;
    divParint.appendChild(div);
  } else {
    divError.textContent = ""; // پاک‌کردن پیام خطا در صورت درست بودن
    console.log("اطلاعات معتبر است");
  }
});
//   if (name2.value.lenght < 2 || name2.value.lenght > 10) {
//     console.log("hi");
