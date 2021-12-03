import axios from 'axios';
// import { data } from 'msw/lib/types/context';
const Card = (article) => {
   const divCard = document.createElement('div');
   const divHeadline = document.createElement('div');
   const divAuthor = document.createElement('div');
   const cont4Img = document.createElement('div');
   const image = document.createElement('img');
   const name = document.createElement('span')

   //TEXTCONTENT 
   divHeadline.textContent = `${article.headline}`;
   name.textContent = `${article.authorName}`;
   image.src = `${article.authorPhoto}`

   //Classes 
   divCard.classList.add('card');
   divHeadline.classList.add('headline');
   divAuthor.classList.add('author');
   cont4Img.classList.add('img-container');

   //APPENDCHILD
   divCard.appendChild(divHeadline);
   divCard.appendChild(divAuthor);
   divAuthor.appendChild(cont4Img);
   divAuthor.appendChild(name);
   cont4Img.appendChild(image);


   //EVENTLISTENER
   divCard.addEventListener('click', () => {
     divCard.classList.toggle(console.log(divHeadline))
   })


   return divCard;
   
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

  const cardAppender = (selector) => {
    const chooser = document.querySelector(selector)
    axios.get('http://localhost:5000/api/articles').then(resp => {
    const bootstrap = resp.data.articles.bootstrap
    bootstrap.forEach(elem => {
      chooser.appendChild(Card(elem))
    })
    const javascript = resp.data.articles.javascript
    javascript.forEach(elem => {
      chooser.appendChild(Card(elem))
    })
    const technology = resp.data.articles.technology
    technology.forEach(elem => {
      chooser.appendChild(Card(elem))
    })
    
   
  })
  .catch(err => {
   console.error(err)
  })
  
  }
  
    
  

  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


 export { Card, cardAppender}
