export const assembleQuery = values => {
  let query = [];

  if (Array.isArray(values.languages)) {
    values.languages.map(language => query.push(language.value));
  }

  return query;
};
