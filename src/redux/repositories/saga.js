import { all, spawn, takeEvery, call, select, put, fork } from 'redux-saga/effects';

//UTILS
import Api from '../../helpers/api';

//ACTIONS
import actions from './actions';

export function* fetchRepositoriesByLanguageRequest() {
  yield takeEvery(actions.FETCH_REPOSITORIES_REQUEST, function* ({ payload, switchLoading }) {
    try {
      if (typeof switchLoading === 'function') {
        switchLoading(true);
      }

      const result = yield call(Api.fetchRepositoriesByLanguage, 'language:Javascript+language:Go');

      yield put({ type: actions.FETCH_REPOSITORIES_SUCCESS, payload: result });

      if (typeof switchLoading === 'function') {
        switchLoading(false);
      }
    } catch (error) {
      if (typeof switchLoading === 'function') {
        switchLoading(false);
      }

      console.log('error -->', error);
    }
  });
}

export default function* rootSaga() {
  yield all([spawn(fetchRepositoriesByLanguageRequest)]);
}
