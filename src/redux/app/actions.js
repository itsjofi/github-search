const actions = {
  HANDLE_ERRORS: 'HANDLE_ERRORS',

  handleErrors: errors => ({
    type: actions.HANDLE_ERRORS,
    payload: errors,
  }),
};

export default actions;
