import { all, spawn, takeEvery, call, put } from 'redux-saga/effects';

//UTILS
import Api from '../../helpers/api';

//ACTIONS
import actions from './actions';
import appActions from '../app/actions';

export function* fetchRepositoriesByLanguageRequest() {
  yield takeEvery(actions.FETCH_REPOSITORIES_REQUEST, function* () {
    try {
      yield put({ type: appActions.SWITCH_IS_LOADING, payload: true });

      let options = {
        q: 'language:Javascript+language:Go+language:Python+language:PHP+language:Ruby',
        sort: 'stars',
        order: 'desc',
      };

      const result = yield call(Api.fetchRepositoriesByLanguage, options);

      yield put({ type: actions.FETCH_REPOSITORIES_SUCCESS, payload: result });

      yield put({ type: appActions.SWITCH_IS_LOADING, payload: false });
    } catch (error) {
      yield put({ type: appActions.SWITCH_IS_LOADING, payload: false });

      return error;
    }
  });
}

export default function* rootSaga() {
  yield all([spawn(fetchRepositoriesByLanguageRequest)]);
}
