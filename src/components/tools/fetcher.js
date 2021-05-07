import axios from "axios";
/* 
*
* fetcher is a tool used to fetch data from the lambda times api.
*
* @variable
* contentString should consist of a string used to designate
* which part of the api is queried.
* (i.e. "topics", "articles")
*
*/
export const fetcher = async contentString => {
  console.log(contentString)
  return await axios({
    method: "get",
    url: `https://lambda-times-api.herokuapp.com/${contentString}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  })
    .then(response => {
      return response.data
    })
    .catch(error => console.error(error)); 
}