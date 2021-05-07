import axios from "axios";
import { articles } from "../mocks/data";
import { fetcher } from "./tools/fetcher";

const Card = (article) => {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorNameSpan = document.createElement("span");
  console.log(article)
  img.setAttribute("src", article.authorPhoto)

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = article.headline;
  author.textContent = article.author;


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
  
  return document.querySelector(selector)
                 .append(cardCreator(keys, articles));
}

const cardCreator = (keys, content) => {
  const authorName = document.createElement('p');
  const authorPhoto = document.createElement('img');
  const headline = document.createElement('p');
  const ledger = document.createElement('div');
  
  keys.forEach(subject => {
    content[subject].forEach(article => {
      console.log(article)
      // authorName.textContent = article.authorName;
      // authorPhoto.setAttribute('src', article.authorPhoto);
      // headline.textContent = article.headline;

      ledger.append(Card(article));
    });
  });

  return ledger;
}

export { Card, cardAppender }
