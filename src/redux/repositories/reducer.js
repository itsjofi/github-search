import actions from './actions';

const initialState = {
  list: {
    items: [],
    incomplete_results: false,
    total_count: 0,
  },
  activity: {},
};

export default function repositoresReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, list: action.payload };
    case actions.FETCH_REPOSITORY_COMMIT_ACTIVITY_SUCCESS:
      return { ...state, activity: { ...state.activity, ...action.payload } };
    default:
      return state;
  }
}
