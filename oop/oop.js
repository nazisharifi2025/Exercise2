const masseg = document.getElementById("masseg");
const text = document.getElementById("text");
const clickme = document.getElementById("clickme");
const matn = document.getElementById("matn");
clickme.addEventListener("click", () => {
  // text.select(); // اینجا اصلاح شده
  // text.setSelectionRange(0, 99999); // برای موبایل

  document.execCommand("copy");
  masseg.classList.remove("hidden");
  masseg.classList.add("flex");
  setInterval(() => {
    masseg.classList.add("hidden");
    masseg.classList.remove("flex");
  }, 2000);
  text.value = "";
});
function jenertorpassword() {
  const password =
    "ABCDEFGHIJKLMNOPQWXYZabcdefghijklmnopqwxyz123456789!@#$%^&*(){}|?";
  let gPassword = "";
  for (let a = 0; a < 9; a++) {
    const randomindex = Math.floor(Math.random() * password.length);
    gPassword += password[randomindex];
  }
  document.getElementById("result").innerText = gPassword;
}

// navigator.clipboard.writeText("این متن کپی می‌شود")
// .then(() => alert("کپی شد!"))
// .catch(err => alert("خطا در کپی: " + err));
