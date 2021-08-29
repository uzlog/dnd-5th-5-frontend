import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as alacardAPI from '@lib/api/alacard';

/**
 * 액션 타입
 */
const [GET_ALA_CARD_LIST, GET_ALA_CARD_LIST_SUCCESS, GET_ALA_CARD_LIST_FAILURE] =
  createRequestActionTypes('mypage/GET_ALA_CARD_LIST');
const UPDATE_ERROR = 'mypage/UPDATE_ERROR';

/**
 * 액션 생성 함수
 */
export const getAlaCardList = createAction(GET_ALA_CARD_LIST);
export const updateError = createAction(UPDATE_ERROR);

/**
 * 사가 생성
 */
const getAlaCardListSaga = createRequestSaga(GET_ALA_CARD_LIST, alacardAPI.getAlaCardList);

export function* mypageSaga() {
  yield takeLatest(GET_ALA_CARD_LIST, getAlaCardListSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  alacardStatus: 0,
  alacardMessage: '',
  alacardData: {},
  alacardTimestamp: '',
  alacardError: '',
  hadError: false,
};

const mypage = handleActions(
  {
    [UPDATE_ERROR]: (state) => ({
      ...state,
      alacardError: '',
      hadError: true,
    }),
    [GET_ALA_CARD_LIST_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      alacardStatus: status,
      alacardMessage: message,
      alacardData: data,
      alacardTimestamp: timestamp,
    }),
    [GET_ALA_CARD_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      alacardError: error,
    }),
  },
  initialState,
);

export default mypage;
