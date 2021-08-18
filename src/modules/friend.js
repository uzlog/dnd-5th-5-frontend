import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as memberAPI from '@lib/api/member';
import * as friendAPI from '@lib/api/friend';

/**
 * 액션 타입
 */
const [GET_OTHER_INFO, GET_OTHER_INFO_SUCCESS, GET_OTHER_INFO_FAILURE] =
  createRequestActionTypes('friend/GET_OTHER_INFO');
const [GET_FRIEND_LIST, GET_FRIEND_LIST_SUCCESS, GET_FRIEND_LIST_FAILURE] =
  createRequestActionTypes('friend/GET_FRIEND_LIST');
const [GET_RELATION, GET_RELATION_SUCCESS, GET_RELATION_FAILURE] = createRequestActionTypes('friend/GET_RELATION');
const [SEND_FOLLOW, SEND_FOLLOW_SUCCESS, SEND_FOLLOW_FAILURE] = createRequestActionTypes('friend/SEND_FOLLOW');
const [ACCEPT_FOLLOW, ACCEPT_FOLLOW_SUCCESS, ACCEPT_FOLLOW_FAILURE] = createRequestActionTypes('friend/ACCEPT_FOLLOW');
const [DECLINE_FOLLOW, DECLINE_FOLLOW_SUCCESS, DECLINE_FOLLOW_FAILURE] =
  createRequestActionTypes('friend/DECLINE_FOLLOW');
const [CANCEL_FOLLOW, CANCEL_FOLLOW_SUCCESS, CANCEL_FOLLOW_FAILURE] = createRequestActionTypes('friend/CANCEL_FOLLOW');
const [DELETE_FRIEND, DELETE_FRIEND_SUCCESS, DELETE_FRIEND_FAILURE] = createRequestActionTypes('friend/DELETE_FRIEND');

/**
 * 액션 생성 함수
 */
export const getOtherInfo = createAction(GET_OTHER_INFO, (nickname) => nickname);
export const getFriendList = createAction(GET_FRIEND_LIST);
export const getRelation = createAction(GET_RELATION, (nickname) => nickname);
export const sendFollow = createAction(SEND_FOLLOW, (nickname) => nickname);
export const acceptFollow = createAction(ACCEPT_FOLLOW, (nickname) => nickname);
export const declineFollow = createAction(DECLINE_FOLLOW, (nickname) => nickname);
export const cancelFollow = createAction(CANCEL_FOLLOW, (nickname) => nickname);
export const deleteFriend = createAction(DELETE_FRIEND, (nickname) => nickname);

/**
 * 사가 생성
 */
const getOtherInfoSaga = createRequestSaga(GET_OTHER_INFO, memberAPI.getOtherInfo);
const getFriendListSaga = createRequestSaga(GET_FRIEND_LIST, friendAPI.getFriendList);
const getRelationSaga = createRequestSaga(GET_RELATION, friendAPI.getRelation);
const sendFollowSaga = createRequestSaga(SEND_FOLLOW, friendAPI.sendFollow);
const acceptFollowSaga = createRequestSaga(ACCEPT_FOLLOW, friendAPI.acceptFollow);
const declineFollowSaga = createRequestSaga(DECLINE_FOLLOW, friendAPI.declineFollow);
const cancelFollowSaga = createRequestSaga(CANCEL_FOLLOW, friendAPI.cancelFollow);
const deleteFriendSaga = createRequestSaga(DELETE_FRIEND, friendAPI.deleteFriend);

export function* friendSaga() {
  yield takeLatest(GET_OTHER_INFO, getOtherInfoSaga);
  yield takeLatest(GET_FRIEND_LIST, getFriendListSaga);
  yield takeLatest(GET_RELATION, getRelationSaga);
  yield takeLatest(SEND_FOLLOW, sendFollowSaga);
  yield takeLatest(ACCEPT_FOLLOW, acceptFollowSaga);
  yield takeLatest(DECLINE_FOLLOW, declineFollowSaga);
  yield takeLatest(CANCEL_FOLLOW, cancelFollowSaga);
  yield takeLatest(DELETE_FRIEND, deleteFriendSaga);
}

/**
 * 초기 상태
 */
const initialStae = {
  getOtherInfoStatus: 0,
  getOtherInfoData: {},
  getOtherInfoError: '',

  getFriendListStatus: 0,
  getFriendListMessage: '',
  getFriendListData: [],
  getFriendListError: '',

  getRelationStatus: 0,
  getRelationData: {},
  getRelationError: '',

  sendFollowStatus: 0,
  sendFollowError: '',

  acceptFollowStatus: 0,
  acceptFollowError: '',

  declineFollowStatus: 0,
  declineFollowError: '',

  cancelFollowStatus: 0,
  cancelFollowError: '',

  deleteFriendStatus: 0,
  deleteFollowError: '',
};

const friend = handleActions(
  {
    [GET_OTHER_INFO_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      getOtherInfoStatus: status,
      getOtherInfoData: data,
    }),
    [GET_OTHER_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getOtherInfoError: error,
    }),
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
    [GET_RELATION_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      getRelationStatus: status,
      getRelationData: data,
    }),
    [GET_RELATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getRelationError: error,
    }),
    [SEND_FOLLOW_SUCCESS]: (state, { payload: status }) => ({
      ...state,
      sendFollowStatus: status,
    }),
    [SEND_FOLLOW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      sendFollowError: error,
    }),
    [ACCEPT_FOLLOW_SUCCESS]: (state, { payload: status }) => ({
      ...state,
      acceptFollowStatus: status,
    }),
    [ACCEPT_FOLLOW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      acceptFollowError: error,
    }),
    [DECLINE_FOLLOW_SUCCESS]: (state, { payload: status }) => ({
      ...state,
      declineFollowStatus: status,
    }),
    [DECLINE_FOLLOW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      declineFollowError: error,
    }),
    [CANCEL_FOLLOW_SUCCESS]: (state, { payload: status }) => ({
      ...state,
      cancelFollowStatus: status,
    }),
    [CANCEL_FOLLOW_FAILURE]: (state, { payload: error }) => ({
      ...state,
      cancelFollowError: error,
    }),
    [DELETE_FRIEND_SUCCESS]: (state, { payload: status }) => ({
      ...state,
      deleteFriendStatus: status,
    }),
    [DELETE_FRIEND_FAILURE]: (state, { payload: error }) => ({
      ...state,
      deleteFriendError: error,
    }),
  },
  initialStae,
);

export default friend;
