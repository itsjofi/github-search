import { all } from 'redux-saga/effects';

//SAGAS
import repositoriesSagas from './repositories/saga';

export default function* rootSaga() {
  yield all([repositoriesSagas()]);
}
