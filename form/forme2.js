const divError = document.getElementById("divError");
const Emailerror = document.getElementById("Emailerror");
const name2 = document.getElementById("name");
const lastName = document.getElementById("LastName");
const number = document.getElementById("number");
const Email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const divParint = document.getElementById("divParint");
const divshoing = document.getElementById("shoingdiv");
const propirty = {};
btnSave.addEventListener("click", () => {
  if (
    name2.value !== "" &&
    lastName.value !== "" &&
    number.value !== "" &&
    Email.value !== ""
  ) {
    divError.classList.add("hidden");
    name2.classList.remove("border");
    name2.classList.remove("border-red-500");
    lastName.classList.remove("border");
    lastName.classList.remove("border-red-500");
    number.classList.remove("border");
    number.classList.remove("border-red-500");
    Email.classList.remove("border");
    Email.classList.remove("border-red-500");

    // person.name =name2.val
    if (
      isNaN(name2.value) &&
      name2.value.length >= 2 &&
      name2.value.length <= 10
    ) {
      propirty.value = name2.value;
      name2.classList.remove("border");
      name2.classList.remove("border-red-500");
      name2.value = "";
    } else {
      name2.classList.add("border");
      name2.classList.add("border-red-500");
    }
    if (
      isNaN(lastName.value) &&
      lastName.value.length >= 2 &&
      lastName.value.length <= 10
    ) {
      propirty.lastName = lastName.value;
      lastName.classList.remove("border");
      lastName.classList.remove("border-red-500");
      lastName.value = "";
    } else {
      lastName.classList.add("border");
      lastName.classList.add("border-red-500");
    }
    if (number.value.length === 10) {
      propirty.number = number.value;
      number.classList.remove("border");
      number.classList.remove("border-red-500");
      number.value = "";
    } else {
      number.classList.add("border");
      number.classList.add("border-red-500");
    }
    if (
      Email.value.endsWith("@gmail.com") ||
      Email.value.endsWith("@outlook.com") ||
      Email.value.endsWith("@incloud.com") ||
      Email.value.endsWith("@yahoo.com")
    ) {
      propirty.Email = Email.value;
      Email.classList.remove("border");
      Email.classList.remove("border-red-500");
      Email.value = "";
    } else {
      Email.classList.add("border");
      Email.classList.add("border-red-500");
    }
  } else {
    name2.classList.add("border");
    name2.classList.add("border-red-500");
    lastName.classList.add("border");
    lastName.classList.add("border-red-500");
    number.classList.add("border");
    number.classList.add("border-red-500");
    Email.classList.add("border");
    Email.classList.add("border-red-500");
  }
});
