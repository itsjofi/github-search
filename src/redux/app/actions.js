const actions = {
  SWITCH_IS_LOADING: 'SWITCH_IS_LOADING',

  switchIsLoading: isLoading => ({
    type: actions.SWITCH_IS_LOADING,
    payload: isLoading,
  }),
};

export default actions;
