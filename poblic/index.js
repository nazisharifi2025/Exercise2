// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Sayhi() {
//     return `من ${this.name} هستم ${this.age} سالمه`;
//   }
// }
// const person1 = new person("علی", 18);
// console.log(person1.Sayhi());

const btn = document.getElementById("btn");
const divshoing = document.getElementById("divshoing");
const divhidden = document.getElementById("divHidden");
const body = document.getElementById("body");
btn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  if (input === "paper") {
    alert("You Won");
    divhidden.classList.add("hidden");
    divshoing.classList.remove("hidden");
    divshoing.classList.add("flex");
    body.classList.remove("bg-gray-100");
    body.classList.add("bg-[url(../img/images (6).jpg)]");
  } else {
    alert("Trye Agin");
  }
});
