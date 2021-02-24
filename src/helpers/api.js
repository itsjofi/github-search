import fetch from 'isomorphic-unfetch';

import { apiUrls } from './config';

const parseResponse = async res => {
  const json = await res.json();

  if (res.ok) {
    return json;
  }

  throw json;
};

const parseOptions = options => {
  let params = '';

  if (options) {
    Object.keys(options).map((option, index) => {
      let value = Object.values(options)[index];

      if (value !== null || value !== undefined) {
        params += `${index !== 0 ? '&' : ''}${option}=${value}`;
      }

      return option;
    });
  }

  return params;
};

class Api {
  fetchRepositoriesByLanguage = async options => {
    const params = parseOptions(options);

    return await fetch(`${apiUrls.repositories}?${params}`, {
      method: 'get',
    }).then(parseResponse);
  };
}

export default new Api();
