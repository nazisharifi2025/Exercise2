const name2 = document.getElementById("name");
const lastName = document.getElementById("LastName");
const number = document.getElementById("number");
const email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const shoingdiv = document.getElementById("shoingdiv");

btnSave.addEventListener("click", () => {
  [name2, lastName, number, email].forEach((filde) => {
    filde.classList.remove("border", " border-red-500");
  });
  divError.classList.add("hidden");
  let items = true;
  if (name2.value.trim().length > 2 || name2.value.trim().length < 10) {
    name2.classList.add("border", "border-red-500");
    items = false;
  }
  if (lastName.value.trime().length > 2 || lastName.value.trime().length < 10) {
    lastName.classList.add("border ", " border-red-500");
    items = false;
  }
  if (number.value.trim().length > 2 || number.value.trim().length < 10) {
    number.classList.add("border", " border-red-500");
    items = false;
  }
  if (
    !(
      email.value.endsWith("@gmail.com") ||
      email.value.endsWith("@outlook.com") ||
      email.value.endsWith("@yahoo.com") ||
      email.value.endsWith("@incloud.com")
    )
  ) {
    email.classList.add("border", "border-red-500");
    items = false;
  }
});
if (items) {
  const h1 = document.createElement("h1");
  h1.textContent = name2.value;
  shoingdiv.appendChild(h1);
  const h2 = document.createElement("h1");
  h2.textContent = lastName.value;
  shoingdiv.appendChild(h2);
  const h3 = document.createElement("h1");
  h3.textContent = number.value;
  shoingdiv.appendChild(h3);
  const h4 = document.createElement("h1");
  h4.textContent = email.value;
  shoingdiv.appendChild(h4);
  name2.value = "";
  lastName.value = "";
  number.value = "";
  email.value = "";
} else {
  divError.classList.remove("hidden");
}
