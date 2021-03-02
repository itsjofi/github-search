import { months } from './static';

export const parseData = values => {
  let data = [];

  for (const [key, value] of Object.entries(values)) {
    data.push({ name: months[key], month: key, value });
  }

  return [...data];
};
