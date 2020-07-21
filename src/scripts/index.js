let input = document.querySelector("input");
let newsarticles = document.getElementById("news-articles");
//function final is here... contains DOM
function final(Result) {
  let found = "";
  if (Result.length == 0) {
    Found = `<h2>No article was found based on the search.</h2>`;
    newsarticles.innerHTML = Found;
    console.log("else");
  } else {
    Result.forEach((article) => {
      let urlToImage = article.urlToImage;
      let title = article.title;
      let description = article.description;
      let author = article.author;
      let url1 = article.url;
      found += `
      <li class="article">
    <img src="${urlToImage}" class="article-img" alt="image not found">
    <div>
      <h2 class="article-title">${title}</h2>
      <p class="article-description">${description}</p>
      <p><span class="article-author"><a class="article-link" href="${url1}">${author}</a></span></p>
    </div>
  </li>`;
      newsarticles.innerHTML = found;
    });
  }
}
//function swapnil is here ... will fetch news
async function swapnil(url) {
  let response = await fetch(url);
  let result = await response.json();
  let finalResult = result.articles;
  final(finalResult);
}
// when page loads, this lines will execute
let url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=728d17fec990486eba3657920589bfe8`;
swapnil(url);
// when we type in search bar and press enter below lines will execute
input.addEventListener("keydown", (f) => {
  if (f.keyCode === 13) {
    console.log(f.target.value);
    let topic = f.target.value;
    let url = `http://newsapi.org/v2/everything?q=${topic}&apiKey=728d17fec990486eba3657920589bfe8`;
    swapnil(url);
  }
});

//my new api    728d17fec990486eba3657920589bfe8
//my api// http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-19&sortBy=publishedAt&apiKey=11d8247de9d6481491bc5c82ccd6624c