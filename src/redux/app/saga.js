import { all, spawn, takeEvery, call, select, put, fork } from 'redux-saga/effects';

//ACTIONS
import actions from './actions';

export function* handleErrors() {
  yield takeEvery(actions.HANDLE_ERRORS, function* ({ payload }) {
    if (payload) {
      console.log('payload -->', payload);
    }
  });
}

export default function* rootSaga() {
  yield all([spawn(handleErrors)]);
}
