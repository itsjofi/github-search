export const validate = values => {
  let errors = {};

  console.log('validate', values);

  if (Array.isArray(values.languages) && values.languages.length > 5) {
    errors.languages = 'Limite de 5 linguagens por vez.';
  }

  return errors;
};
