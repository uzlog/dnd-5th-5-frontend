import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as friendAPI from '@lib/api/friend';

/**
 * 액션 타입
 */
const [GET_FRIEND_LIST, GET_FRIEND_LIST_SUCCESS, GET_FRIEND_LIST_FAILURE] =
  createRequestActionTypes('friend/GET_FRIEND_LIST');

/**
 * 액션 생성 함수
 */
export const getFriendList = createAction(GET_FRIEND_LIST);

/**
 * 사가 생성
 */
const getFriendListSaga = createRequestSaga(GET_FRIEND_LIST, friendAPI.getFriendList);

export function* friendSaga() {
  yield takeLatest(GET_FRIEND_LIST, getFriendListSaga);
}

/**
 * 초기 상태
 */
const initialStae = {
  getFriendListStatus: 0,
  getFriendListMessage: '',
  getFriendListData: [],
  getFriendListError: '',
};

const friend = handleActions(
  {
    [GET_FRIEND_LIST_SUCCESS]: (state, { payload: { status, message, data } }) => ({
      ...state,
      getFriendListStatus: status,
      getFriendListMessage: message,
      getFriendListData: data,
    }),
    [GET_FRIEND_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getFriendListError: error,
    }),
  },
  initialStae,
);

export default friend;
