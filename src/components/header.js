const Header = (title, date, temp) => {
  const header = document.createElement("div");
  const dateSpan = document.createElement("span");
  const titleHeader = document.createElement("h1");
  const tempSpan = document.createElement("span");
  console.log(dateSpan)
  dateSpan.textContent = date;
  titleHeader.textContent = title;
  tempSpan.textContent = temp;

  header.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  header.append(dateSpan);
  header.append(titleHeader);
  header.append(tempSpan);

  console.log(header);
  return header;
}

const headerAppender = selector => document.querySelector(selector).append(Header("today", "puppies", "98.6F"));

export { Header, headerAppender }
