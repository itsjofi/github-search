import actions from './actions';

const initialState = {
  repos: {
    data: [],
    meta: {},
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_REPOS_LIST_SUCCESS:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}
