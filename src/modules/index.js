import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import alaWord, { alaWordSaga } from './alaWord';
import friend, { friendSaga } from './friend';

const rootReducer = combineReducers({
  loading,
  auth,
  member,
  alaWord,
  friend,
});

export function* rootSaga() {
  yield all([authSaga(), memberSaga(), alaWordSaga()]);
}

export default rootReducer;
