const slider = document.getElementById("slider");

const items = [
  {
    Imageurl: "../img/gallery_01.jpg",
    titel: "Brecfast",
    slidebtn: "coffeteria",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
  {
    Imageurl: "../img/img-hero.jpg",
    titel: "Lanch",
    slidebtn: "Menu",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
  {
    Imageurl: "../img/hero.png",
    titel: "Dener",
    slidebtn: "MenuClassic",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
];

let current = 0;

function shoingitem(index) {
  slider.innerHTML = "";
  const slide = items[index];
  slider.style.backgroundImage = `url('${slide.Imageurl}')`;
  const h2 = document.createElement("h2");
  h2.textContent = slide.titel;

  const h1 = document.createElement("h1");
  h1.textContent = slide.slidebtn;
  const p = document.createElement("p");
  p.classList.add("w-[50%]");
  p.textContent = slide.description;
  slider.appendChild(h2);
  slider.appendChild(h1);
  slider.appendChild(p);
}

let currenttime = 0;
shoingitem(currenttime);
setInterval(() => {
  currenttime = (currenttime + 1) % items.length;
  shoingitem(currenttime);
}, 2000);
