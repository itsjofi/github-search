import { all } from 'redux-saga/effects';

//SAGAS
import appSagas from './app/saga';
import repositoriesSagas from './repositories/saga';

export default function* rootSaga() {
  yield all([appSagas(), repositoriesSagas()]);
}
