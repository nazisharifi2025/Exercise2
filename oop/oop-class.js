// یک کود برای ذخیره مشخصات
const mobail = {
  products: [
    {
      titel: "Apple Watch Sereis 10",
      urlimg: "img/w1.webp",
      Price: "Aluminum",
      quatity: "1800",
    },
    {
      titel: "Apple Watch Sereis 9",
      urlimg: "img/w2.webp",
      Price: "Aluminum",
      quatity: "1800",
    },
    {
      titel: "Apple Watch Sereis 8",
      urlimg: "img/w3.webp",
      Price: "Aluminum",
      quatity: "1800",
    },
  ],
  showing() {
    const divparint = document.getElementById("divparint");
    this.products.forEach((mobail, index, products) => {
      const divChilde = document.createElement("div");
      divChilde.className("div");
      divChilde.innerHTML = `
        <h1>${mobail.titel}</h1>
        <img>${mobail.urlimg}</img>
        <h2>${mobail.Price}</h2>
        <p class="p")>${mobail.quatity}</p>

        `;
      divparint.append(divChilde);
    });
  },
};
mobail.showing();
