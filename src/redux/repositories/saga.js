import { all, spawn, takeEvery, call, put, select } from 'redux-saga/effects';

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

      if (error && error.message) {
        window.alert(error.message);
      }
    }
  });
}

export function* fetchRepositoryCommitActivityRequest() {
  yield takeEvery(
    actions.FETCH_REPOSITORY_COMMIT_ACTIVITY_REQUEST,
    function* ({ owner, repo, switchLoading, id }) {
      try {
        if (typeof switchLoading === 'function') {
          switchLoading(true);
        }
        const result = yield call(Api.fetchRepositoryCommitActivity, owner, repo);

        if (result) {
          let ownerCount = result.owner,
            allCount = result.all,
            newCount = {};

          Object.values(ownerCount).forEach((count, index) => {
            Object.values(allCount).forEach((c, i) => {
              if (index === i) {
                newCount[index] = count + c;
              }
            });
          });

          yield put({
            type: actions.FETCH_REPOSITORY_COMMIT_ACTIVITY_SUCCESS,
            payload: {
              [id]: newCount,
            },
          });
        }

        if (typeof switchLoading === 'function') {
          switchLoading(false);
        }
      } catch (error) {
        if (typeof switchLoading === 'function') {
          switchLoading(false);
        }
      }
    }
  );
}

export default function* rootSaga() {
  yield all([
    spawn(fetchRepositoriesByLanguageRequest),
    spawn(fetchRepositoryCommitActivityRequest),
  ]);
}
