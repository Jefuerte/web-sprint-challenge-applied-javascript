const Header = (title, date, temp) => {
  const header = document.createElement("div").classList.add("header");
  const dateSpan = document.createElement("span").classList.add("date");
  const titleHeader = document.createElement("h1");
  const tempSpan = document.createElement("span").classList.add("temp");

  dateSpan.textContent = date;
  titleHeader.textContent = title;
  tempSpan.textContent = temp;

  header.append(dateSpan);
  header.append(titleHeader);
  header.append(tempSpan);

  console.log(header);
  return header;
}

const headerAppender = (selector) => {
  return selector.append(Header("now", "puppies", "98.6F"));
}

export { Header, headerAppender }
