const slider = document.getElementById("slider");
const right = document.getElementById("right");
const left = document.getElementById("left");

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
  const slide = items[index];
  slider.style.backgroundImage = `url()`;
}
