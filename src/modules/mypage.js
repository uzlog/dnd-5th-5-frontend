import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as memberAPI from '@lib/api/member';
import * as alacardAPI from '@lib/api/alacard';

/**
 * 액션 타입
 */
// const [GET_SELECT_VIEW_LINK, GET_SELECT_VIEW_LINK_SUCCESS, GET_SELECT_VIEW_LINK_FAILURE] =
//   createRequestActionTypes('mypage/GET_SELECT_VIEW_LINK');
const [GET_ALA_CARD_LIST, GET_ALA_CARD_LIST_SUCCESS, GET_ALA_CARD_LIST_FAILURE] =
  createRequestActionTypes('mypage/GET_ALA_CARD_LIST');

/**
 * 액션 생성 함수
 */
// export const getSelectViewLink = createAction(GET_SELECT_VIEW_LINK, (nickname) => nickname);
export const getAlaCardList = createAction(GET_ALA_CARD_LIST);

/**
 * 사가 생성
 */
// const getSelectViewLinkSaga = createRequestSaga(GET_SELECT_VIEW_LINK, memberAPI.getSelectViewLink);
const getAlaCardListSaga = createRequestSaga(GET_ALA_CARD_LIST, alacardAPI.getAlaCardList);

export function* mypageSaga() {
  // yield takeLatest(GET_SELECT_VIEW_LINK, getSelectViewLinkSaga);
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

  // selectLinkStatus: 0,
  // selectLinkData: '',
  // selectLinkError: '',
};

const mypage = handleActions(
  {
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
    // [GET_SELECT_VIEW_LINK_SUCCESS]: (state, { payload: { status, data } }) => ({
    //   ...state,
    //   selectLinkStatus: status,
    //   selectLinkData: data,
    // }),
    // [GET_SELECT_VIEW_LINK_FAILURE]: (state, { payload: error }) => ({
    //   ...state,
    //   selectLinkError: error,
    // }),
  },
  initialState,
);

export default mypage;
