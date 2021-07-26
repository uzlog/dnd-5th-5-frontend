import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';

const rootReducer = combineReducers({
  loading,
  auth,
  member,
});

export function* rootSaga() {
  yield all([authSaga(), memberSaga()]);
}

export default rootReducer;
