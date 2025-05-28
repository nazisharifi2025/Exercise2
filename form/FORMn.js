const divError = document.getElementById("divError");
const name2 = document.getElementById("name");
const lastName = document.getElementById("LastName");
const number = document.getElementById("number");
const Email = document.getElementById("Email");
const btnSave = document.getElementById("btnSave");
const divshoing = document.getElementById("shoingdiv");

btnSave.addEventListener("click", () => {
  // ریست ارورها
  [name2, lastName, number, Email].forEach((field) => {
    field.classList.remove("border", "border-red-500");
  });
  divError.classList.add("hidden");

  let isValid = true;

  // اعتبارسنجی نام
  if (name2.value.trim().length < 2 || name2.value.trim().length > 10) {
    name2.classList.add("border", "border-red-500");
    isValid = false;
  }

  // اعتبارسنجی نام خانوادگی
  if (lastName.value.trim().length < 2 || lastName.value.trim().length > 10) {
    lastName.classList.add("border", "border-red-500");
    isValid = false;
  }

  // اعتبارسنجی شماره
  if (number.value.trim().length === 10) {
    number.classList.add("border", "border-red-500");
    isValid = false;
  }

  // اعتبارسنجی ایمیل
  if (
    !(
      Email.value.endsWith("@gmail.com") ||
      Email.value.endsWith("@outlook.com") ||
      Email.value.endsWith("@incloud.com") ||
      Email.value.endsWith("@yahoo.com")
    )
  ) {
    Email.classList.add("border", "border-red-500");
    isValid = false;
  }

  // اگر همه فیلدها درست بودند:
  if (isValid) {
    const h1 = document.createElement("h1");
    h1.textContent = name2.value;
    divshoing.appendChild(h1);

    const h2 = document.createElement("h1");
    h2.textContent = lastName.value;
    divshoing.appendChild(h2);

    const h3 = document.createElement("h1");
    h3.textContent = number.value;
    divshoing.appendChild(h3);

    const h4 = document.createElement("h1");
    h4.textContent = Email.value;
    divshoing.appendChild(h4);

    // پاک کردن فیلدها
    name2.value = "";
    lastName.value = "";
    number.value = "";
    Email.value = "";
  } else {
    divError.classList.remove("hidden");
  }
});
