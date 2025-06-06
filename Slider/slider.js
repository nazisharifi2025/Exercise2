const slider = document.getElementById("slider");
const right = document.getElementById("right");
const left = document.getElementById("left");

const items = [
  {
    Imageurl: "../img/What-is-Programming-AI-2.jpg.webp",
    titel: "برنامه نویسی چیست؟‌",
    slidebtn: "همه چیز هایی که باید بدانید + کاربردها",
    description:
      "محبوبیت برنامه نویسی در سال‌های اخیر به قدری افزایش یافته است که تقریباً اکثر افراد در مورد آن چیزهایی شنیده‌اند. با توجه به درآمد و حقوق بالای برنامه نویسی و جذابیت‌های متعدد آن، افراد بسیاری تصمیم می‌گیرند که وارد دنیای برنامه نویسی شوند. در این راستا، اولین سوالی که به وجود می‌آید این است که اصلاً برنامه نویسی چیست و چه کاربردی دارد؟ علاوه بر آن، سوال‌های دیگری هم پیرامون مفهوم برنامه نویسی برای بسیاری از افراد به وجود می‌آیند. مثلاً این سوال که الگوریتم برنامه نویسی چیست ، انواع برنامه نویسی چیست ، هدف از برنامه نویسی چیست ، شرکت برنامه نویسی چیست و بسیاری از سوالات دیگر در خصوص برنامه نویسی وجود دارند. در این مقاله از مجله فرادرس سعی شده است به طور جامع و با بیانی ساده به این سوال‌ها پاسخ داده شود و همچنین منابع آموزشی برای شروع یادگیری برنامه نویسی به علاقه‌مندان معرفی شده‌اند. ",
  },
  {
    Imageurl: "../img/programming-2.webp",
    titel: "کاربرد برنامه نویسی",
    slidebtn: "ویب",
    description:
      "حال بگذارید بببینیم کاربرد برنامه نویسی چیست و واقعاً به چه کاری می‌آید؟ برنامه نویسی یا همان کدنویسی تقریباً در تمام جنبه‌های زندگی مُدرن کاربرد دارد. تمام اپلیکیشن‌ها یا همان برنامه‌های نصب شده روی گوشی‌های هوشمند، تبلت‌ها یا کامپیوترها به وسیله کدها اجرا می‌شوند. در سایر سیستم‌های دیجیتال مثل تلویزیون، ماشین حساب و حتی یخچال هم از برنامه نویسی استفاده شده است. امروزه تقریباً همه اتومبیل‌ها هم دارای کامپیوترهای تعبیه شده هستند که در آن‌ها هم برای کنترل همه چیز از سیستم تهویه گرفته تا تزریق کننده‌های سوخت از برنامه نویسی استفاده می‌شود.",
  },
  {
    Imageurl: "../img/b1.webp",
    titel: "برنامه نویسی وب چیست ؟",
    slidebtn: "برنامه نویسی کاربردهای گوناگونی دارد ",
    description:
      "برنامه نویسی وب همان برنامه نویسی است، با این تفاوت که، در برنامه نویسی وب ، صفحات وب یا برنامه‌های کاربردی (اپلیکیشن‌هایی) ایجاد می‌شوند که در محیط وب و از طریق مرورگرها قابل دسترسی و استفاده هستند. گستره برنامه نویسی وب بسیار وسیع است و از ایجاد یک صفحه وب ساده و ایستا شروع می‌شود و تا ساخت وب اپلیکیشن‌های پیچیده، کسب و کارهای الکترونیک و خدمات شبکه‌های اجتماعی ادامه پیدا می‌کند.پیش از ادامه این مبحث لازم است یادآور شویم که می‌توانید برنامه‌نویسی وب را با استفاده از مجموعه آموزش برنامه‌نویسی وب، مقدماتی تا پیشرفته فرادرس یاد بگیریبرنامه نویسی وب فرآیند کدنویسی برنامه‌های کاربردی است که روی یک وب سرور اجرا می‌شوند و افراد بسیاری می‌توانند به این اپلیکیشن‌ها از طریق اینترنت دسترسی داشته باشند و از خدمات آن‌ها استفاده کنند. بسیاری از برنامه‌های کاربردی با پیاده‌سازی در محیط وب به عنوان «وب اپلیکیشن» (Web Application) به خوبی کار می‌کنند. به عنوان مثال، Gmail و Google Map نمونه‌هایی از یک وب اپلیکیشن هستند.",
  },
  {
    Imageurl: "../img/html.webp",
    titel: "HTML چیست ؟",
    slidebtn:
      "یک زبان نشانه‌گذاری (Markup) از تعدادی علامت‌گذاری‌ها تشکیل شده است ",
    description:
      "HTML سرنامی برای عبارت «HyperText Markup Language» به معنی «زبان نشانه‌گذاری فرامتن» است. HTML مجموعه‌ای از نمادهای نشانه‌گذاری یا کدهایی به حساب می‌آید که برای نمایش صفحات وب در اینترنت استفاده می‌شوند. یک فرامتن‌یا ابَرمتن (HyperText) متنی است که برای ارجاع و هدایت کاربر به سایر صفحات متنی مورد استفاده قرار می‌گیرد.",
  },
  {
    Imageurl: "../img/css.webp",
    titel: "CSS چیست ؟",
    slidebtn: "CSS سرنامی برای عبارت «Cascading Style Sheets» است ",
    description:
      "سرنامی برای عبارت «Cascading Style Sheets» است و یک زبان استایل‌دهی (Style Sheet) به حساب می‌آید که برای توصیف نحوه نمایش و بازنمایی اسناد تولید شده با یک زبان نشانه‌گذاری مثل HTML به کار گرفته می‌شود. CSS با هدف فراهم کردن امکان جداسازی نحوه نمایش و محتوا طراحی شده است.",
  },
  {
    Imageurl: "../img/js.webp",
    titel: "جاوا اسکریپت چیست ؟",
    slidebtn: "جاوا اسکریپت یک زبان برنامه نویسی پویا (داینامیک) است",
    description:
      "که برای برنامه نویسی وب استفاده می‌شود. جاوا اسکریپت امکان ایجاد قابلیت‌های پویا و تعاملی در صفحات و کاربردهای وب را فراهم می‌کند. نمی‌توان تنها با استفاده از HTML و CSS چنین قابلیت‌هایی را به وب سایت‌ها و وب اپلیکیشن‌ها اضافه کرد. یک منو در وب که با کلیک کردن نمایش داده می‌شود و تغییر رنگ عناصر در صفحه وب به صورت پویا، مثال‌هایی از کاربرد جاوا اسکریپت در برنامه نویسی وب هستند.",
  },
];

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
}, 3000);

right.addEventListener("click", () => {
  currenttime = (currenttime + 1) % items.length;
  shoingitem(currenttime);
});
left.addEventListener("click", () => {
  currenttime = (currenttime - 1 + items.length) % items.length;
  shoingitem(currenttime);
});
