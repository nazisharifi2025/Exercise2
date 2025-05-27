const slider = document.getElementById("slider");

const items = [
  {
    Imageurl: "../img/bg2.jpg",
    titel: "Product",
    slidebtn: "coffe",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
  {
    Imageurl: "../img/bg2.jpg",
    titel: "Product",
    slidebtn: "coffe",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
  {
    Imageurl: "../img/bg2.jpg",
    titel: "Product",
    slidebtn: "coffe",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
];

let current = 0;

function shoingitem(index) {
  const slide = items[current];
  slider.classList.add("bg-[url(../img/imgs1.jpg)]");
  const h2 = document.createElement("h2");
  h2.textContent = slide.titel;
  const p = document.createElement("p");
  p.textContent = slide.description;
  const h1 = document.createElement("h1");
  h1.textContent = slide.slidebtn;
  slider.appendChild(h2);
  slide.appendChild(p);
  slider.appendChild(h1);
}
shoingitem(currenttime);
let currenttime = 0;
setInterval(() => {
  currenttime = (currenttime + 1) % items.length;
  shoingitem(currenttime);
}, 2000);
