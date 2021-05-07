import axios from "axios";
import { fetcher } from "./tools/fetcher";

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

const cardAppender = async selector => {
  const articles = await fetcher("articles").then(res => res.articles)
  const keys = Object.keys(articles);
  console.log(articles);
  
  const result = cardCreator(keys, articles);
  console.log(result)
  document.querySelector(selector).append(result);
}

const cardCreator = (keys, content) => {
  const authorName = document.createElement('p');
  const authorPhoto = document.createElement('img');
  const headline = document.createElement('p');
  const ledger = document.createElement('div');
  
  keys.forEach(subject => {
    content[subject].forEach(article => {
      authorName.textContent = article.authorName;
      authorPhoto.setAttribute('src', article.authorPhoto);
      headline.textContent = article.headline;

      ledger.append(authorName);
      ledger.append(authorPhoto);
      ledger.append(headline);
    });
  });

  return ledger;
}

export { Card, cardAppender }
