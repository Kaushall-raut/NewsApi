const apiLink =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=a00d5d78fe124eb39fc7bb1c63350837";
// const apiLink =//
// "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a00d5d78fe124eb39fc7bb1c63350837";
const newsFeed = document.querySelector(".newsContainer");
const fetchNews = async () => {
  const data = await fetch(apiLink);
  const res = await data.json();

  let { articles } = res;
  console.log(
    articles,
    articles[0].url,
    articles[0].description,
    articles[0].urlToImage
  );
  articles.forEach((element) => {
    if (!element.urlToImage || !element.description) {
      return;
    }
    // let i = 0;
    const news = document.createElement("div");
    news.classList.add("feed");
    // newsFeed.appendChild(news);
    newsFeed.append(news);
    news.innerHTML = `<div class= "image">
    <img src=${element.urlToImage}>
     </div>
     <div class="details">
     <p>${element.description}</p>
     <br>
     <a href=${element.url} target="blank">View News</a></div>`;

    // news.innerHTML = `<p>${element.description}</p>`;
  });
};
fetchNews();
window.addEventListener("load", () => {
  fetchNews();
});
