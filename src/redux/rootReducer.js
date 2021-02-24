import { combineReducers } from 'redux';

//REDUCERS
import Repositories from './repositories/reducer';
import App from './app/reducer';

export default combineReducers({
  App,
  Repositories,
});
