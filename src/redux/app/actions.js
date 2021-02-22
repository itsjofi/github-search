const actions = {
  FETCH_REPOS_LIST_REQUEST: 'FETCH_REPOS_LIST_REQUEST',
  FETCH_REPOS_LIST_SUCCESS: 'FETCH_REPOS_LIST_SUCCESS',

  fetchReposList: () => ({
    type: actions.FETCH_REPOS_LIST_REQUEST,
  }),
};

export default actions;
