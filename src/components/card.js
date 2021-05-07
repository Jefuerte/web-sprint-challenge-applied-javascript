const Card = (article) => {
  const card = document.createElement("div").classList("card");
  const headline = document.createElement("div").classList("headline").textContent(article.headline);
  const author = document.createElement("div").classList("author").textContent(article.author);
  const imgContainer = document.createElement("div").classList("img-container");
  const img = document.createElement("img");
  const authorNameSpan = document.createElement("span");

  card.append(headline);
  card.append(author);
  card.append(imgContainer);
  card.append(img);
  card.append(authorNameSpan);

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const articles = articleFetcher();
  console.log(articles);

  selector.append(articles);
}

const articleFetcher = () => {
  return axios({
    method: "get",
    url: "https://lambda-times-api.herokuapp.com/articles",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    }
  })
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error);
  }); 
}

export { Card, cardAppender }
