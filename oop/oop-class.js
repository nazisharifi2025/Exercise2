const divparint = document.getElementById("divParint");

// کلاس برای محصول
class mobailProduct {
  constructor(titel, urlimg, Price, discription) {
    this.titel = titel;
    this.urlimg = urlimg;
    this.Price = Price;
    this.discription = discription;
  }
}

// نمایش یک محصول
class singelproduct {
  constructor(product) {
    this.product = product;
  }

  addtocart() {
    console.log("add to cart");
    console.log(this.product);
  }
  show() {
    const divChilde = document.createElement("div");
    divChilde.classList.add("div");
    divChilde.innerHTML = `
        <h1>${this.product.titel}</h1>
        <img src="${this.product.urlimg}" alt="${this.product.titel}">
        <h2>\$ ${this.product.Price}</h2>
        <p class="p">${this.product.discription}</p>
        <button class="bg-gray-400 rounded-md py-2 px-4">Add to Cart</button>
    `;
    const butten = divChilde.querySelector("button");
    butten.addEventListener("click", this.addtocart.bind(this));
    return divChilde;
  }
}
class AddtoCart {
  iteme = [];
  render() {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1 class="font-bold text-2xl my-1.5 ml-5">Total: ${0}</h1>
        <button class="font-bold text-2xl mb-10 ml-5">Order Now</button>
        
        `;
    return div;
  }
}
// لیست محصولات
class productList {
  constructor() {
    this.products = [
      new mobailProduct(
        "Apple Watch Series 10",
        "../img/w1.webp",
        "1800",
        "Aluminum"
      ),
      new mobailProduct(
        "Apple Watch Series 9",
        "../img/w2.webp",
        "1600",
        "Aluminum"
      ),
      new mobailProduct(
        "Apple Watch Series 8",
        "../img/w3.webp",
        "1400",
        "Aluminum"
      ),
      new mobailProduct(
        "Apple Watch Series 7",
        "../img/w4.webp",
        "1300",
        "Aluminum"
      ),
      new mobailProduct(
        "Apple Watch Series 6",
        "../img/w5.webp",
        "900",
        "Aluminum"
      ),
      new mobailProduct(
        "Apple Watch Series 5",
        "../img/w6.webp",
        "1000",
        "Aluminum"
      ),
    ];
  }

  showing() {
    const container = document.createElement("div");
    container.classList.add("cotener");

    this.products.forEach((mobail) => {
      const singelshoing = new singelproduct(mobail);
      const div = singelshoing.show();
      container.appendChild(div);
    });
    return container;
  }
}

class Page {
  showintier() {
    const addtocart = new AddtoCart();
    const divtotal = addtocart.render();
    divparint.append(divtotal);
    const list = new productList();
    const divprouduckt = list.showing();
    divparint.append(divprouduckt);
  }
}
const page = new Page();

page.showintier();
// اجرای برنامه
