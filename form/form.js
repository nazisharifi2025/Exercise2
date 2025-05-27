const name2 = document.getElementById("name");
const lastName = document.getElementById("LastName");
const number = document.getElementById("number");
const email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const shoingdiv = document.getElementById("shoingdiv");

btnSave.addEventListener("click", () => {
  if (name2.value.length >= 2 && name2.value.length <= 10) {
    console.log("hi");
  }
  if (lastName.value.length >= 2 && lastName.value.length <= 10) {
    console.log("git");
  }
  if (number.value.length >= 2 && number.value.length <= 10) {
    console.log("naz");
  }
  if (
    email.value.endsWith("@gmail.com") ||
    email.value.endsWith("@outlook.com")
  ) {
    console.log("nazi");
  }
});
