export const parseData = values => {
  let data = [];

  for (const [key, value] of Object.entries(values)) {
    data.push({ name: `Semana ${Number(key) + 1}`, week: key, value });
  }

  return [...data];
};
