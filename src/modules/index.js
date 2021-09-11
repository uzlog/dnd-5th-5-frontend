import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import auth, { authSaga } from './auth';
import member, { memberSaga } from './member';
import alaWord, { alaWordSaga } from './alaWord';
import mypage, { mypageSaga } from './mypage';
import friend, { friendSaga } from './friend';
import modal from './modal';
import cardSetting, { cardSettingSaga } from './cardSetting';
import main, { mainSaga } from './main';
import alarm, { alarmSaga } from './alarm';

const rootReducer = combineReducers({
  loading,
  auth,
  member,
  alaWord,
  mypage,
  friend,
  modal,
  cardSetting,
  main,
  alarm,
});

export function* rootSaga() {
<<<<<<< HEAD
  yield all([authSaga(), memberSaga(), mypageSaga(), friendSaga(), cardSettingSaga(), alaWordSaga(), mainSaga()]);
=======
  yield all([authSaga(), memberSaga(), mypageSaga(), friendSaga(), cardSettingSaga(), mainSaga(), alarmSaga()]);
>>>>>>> 10ff931680fa126369b541f197827131bf0cc44d
}

export default rootReducer;
