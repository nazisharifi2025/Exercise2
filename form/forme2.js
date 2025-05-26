const divError = document.getElementById("divError");
const name2 = document.getElementById("name");
const lastName = document.getElementById("lastName");
const number = document.getElementById("number");
const Email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");

btnSave.addEventListener("click", () => {
  if (name2.value.lenght < 2 && name2.value.lenght > 10) {
    console.log("hi");
  }
});
