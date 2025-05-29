const slider = document.getElementById("slider");
const right = document.getElementById("right");
const left = document.getElementById("left");

const items = [
  {
    Imageurl: "../img/web3.jpg",
    titel: "برنامه نویسی چیست؟‌",
    slidebtn: "همه چیز هایی که باید بدانید + کاربردها",
    description:
      "محبوبیت برنامه نویسی در سال‌های اخیر به قدری افزایش یافته است که تقریباً اکثر افراد در مورد آن چیزهایی شنیده‌اند. با توجه به درآمد و حقوق بالای برنامه نویسی و جذابیت‌های متعدد آن، افراد بسیاری تصمیم می‌گیرند که وارد دنیای برنامه نویسی شوند. در این راستا، اولین سوالی که به وجود می‌آید این است که اصلاً برنامه نویسی چیست و چه کاربردی دارد؟ علاوه بر آن، سوال‌های دیگری هم پیرامون مفهوم برنامه نویسی برای بسیاری از افراد به وجود می‌آیند. مثلاً این سوال که الگوریتم برنامه نویسی چیست ، انواع برنامه نویسی چیست ، هدف از برنامه نویسی چیست ، شرکت برنامه نویسی چیست و بسیاری از سوالات دیگر در خصوص برنامه نویسی وجود دارند. در این مقاله از مجله فرادرس سعی شده است به طور جامع و با بیانی ساده به این سوال‌ها پاسخ داده شود و همچنین منابع آموزشی برای شروع یادگیری برنامه نویسی به علاقه‌مندان معرفی شده‌اند. ",
  },
  {
    Imageurl: "../img/Web.jpg",
    titel: "Lanch",
    slidebtn: "Menu",
    description:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus nemo voluptatibus sapiente illo doloremque, ",
  },
  {
    Imageurl: "../img/web2.jpg",
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

right.addEventListener("click", () => {
  currenttime = (currenttime + 1) % items.length;
  shoingitem(currenttime);
});
left.addEventListener("click", () => {
  currenttime = (currenttime - 1 + items.length) % items.length;
  shoingitem(currenttime);
});
