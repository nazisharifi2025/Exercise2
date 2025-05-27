const divError = document.getElementById("divError");
const Emailerror = document.getElementById("Emailerror");
const name2 = document.getElementById("name");
const lastName = document.getElementById("LastName");
const number = document.getElementById("number");
const Email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const divParint = document.getElementById("divParint");
const divshoing = document.getElementById("divshing");

btnSave.addEventListener("click", () => {
  if (
    name2.value !== "" &&
    lastName.value !== "" &&
    number.value !== "" &&
    Email.value !== ""
  ) {
    if (name2.value.length >= 2 && name2.value.length <= 10) {
      console.log("hi");
    }
    if (lastName.value.length >= 2 && lastName.value.length <= 10) {
      console.log("h");
    }
    if (number.value.length >= 2 && number.value.length <= 10) {
      console.log("این یک عدد است");
    }
    if (
      Email.value.endsWith("@gmail.com") ||
      Email.value.endsWith("@outlook.com") ||
      Email.value.endsWith("@incloud.com") ||
      Email.value.endsWith("@yahoo.com")
    ) {
      console.log("nazisharifi@gmail.com");
    }
  } else {
    divError.classList.remove("hidden");
  }
  name2.value = "";
  lastName.value = "";
  number.value = "";
  Email.value = "";
});
