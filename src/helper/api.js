import fetch from "isomorphic-unfetch";

import { apiUrls } from "./config";

const parseResponse = async (res) => {
  const json = await res.json();

  if (res.ok) {
    return json;
  }

  throw json;
};

class Api {
  fetchRepositoriesList = async () => {
    return await fetch(apiUrls.repositories, {
      method: "get",
    }).then(parseResponse);
  };
}

export default new Api();
