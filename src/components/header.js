//import { node } from "webpack";

const Header = (title, date, temp) => {
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const titleH = document.createElement('h1');
  const spanTemp = document.createElement('span');

  //console.log(spanDate);


  //textcontent 
  spanDate.textContent = date;
  titleH.textContent = title;
  spanTemp.textContent = temp;


  //classes

  headerDiv.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  //appendchild

  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(spanTemp);
  headerDiv.appendChild(titleH);


  //console.log(header);
  return headerDiv;


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
   let testHeader = Header("Lambda Times", "Dec 03, 2021", "66°");
     const headerPart = document.querySelector(selector).appendChild(testHeader);

   
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
