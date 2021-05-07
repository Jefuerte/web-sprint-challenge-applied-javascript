const Tabs = (topics) => {
  const topicsCard = document.createElement("div").classList.add("topics");
  const tab = doucment.createElement("div").classList("tab");
  const topicsResult = topics.map(topic => topicsCard.append(tab.textContent(topic)));

  return topicsResult;
}

const topicFetcher = () => {
  return axios({
    method: "post",
    url: "https://lambda-times-api.herokuapp.com/topics",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    }
  })
  .then((response) => {
    Tabs(response);
  })
  .catch((error) => {
    console.error(error);
  }); 
}

const tabsAppender = (selector) => {
  return selector.append(topicFetcher("topics"));
}



export { Tabs, tabsAppender }
