import axios from "axios";
import { fetcher } from "./tools/fetcher";

const Tabs = (topics) => {
  const topicsCard = document.createElement("div");
  const tab = document.createElement("div");

  topicsCard.classList.add("topics");
  tab.classList.add("tab");

  tab.textContent = topics;

  return tab;
}

const fetched = fetcher("topics").then(res => res);

const tabsAppender = async (selector) => {
    let result = document.createElement("div");
    result.classList.add("topics");

    const tabs = await fetcher("topics").then(res => {
      res.topics.forEach(topic => {
        const tabs = Tabs(topic);
        result.append(tabs);
        console.log(result)
      });
    });

    return document.querySelector(selector).append(tabs);
}

export { Tabs, tabsAppender }
