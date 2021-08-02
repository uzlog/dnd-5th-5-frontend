import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import mypage, { mypageSaga } from './mypage';

const rootReducer = combineReducers({
  loading,
  auth,
  member,
  mypage,
});

export function* rootSaga() {
  yield all([authSaga(), memberSaga(), mypageSaga()]);
}

export default rootReducer;
