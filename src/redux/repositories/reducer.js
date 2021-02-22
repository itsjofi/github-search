import actions from './actions';

const initialState = {
  list: {},
};

export default function repositoresReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
