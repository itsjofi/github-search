import actions from './actions';

const initialState = {
  isLoading: false,
};

export default function repositoresReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SWITCH_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}
