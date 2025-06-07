const apiKey = "pub_f6d62b45913148c3bee350a618069981";
const url = `https://newsdata.io/api/1/latest?apikey=pub_f6d62b45913148c3bee350a618069981&country=au,us`;
fetch(url).then((respons) => {
  let date = respons.json();
  date.then((date) => {
    const results = date.results;
    for (let singelNews of results) {
      const parint = document.getElementById("parint");
      const div = document.createElement("div");
      div.classList.add("py-6", "px-3");
      div.innerHTML = `
            <h1 class="text-2xl border p-5">${singelNews.title}</h1>
            <p>${singelNews.description}</p>
            <img class="w-[120vh] mx-auto rounded-md h-[80vh]" src="${singelNews.image_url}">
            <span class="text-blue-500 border-b border-blue-500">${singelNews.link}</span>
            `;
      parint.append(div);
    }
  });
});
