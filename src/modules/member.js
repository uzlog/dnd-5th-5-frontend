import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as memberAPI from '../lib/api/member';

/**
 * 액션 타입
 */
const CHANGE_FIELD = 'member/CHANGE_FIELD';
const [GET_MY_INFO, GET_MY_INFO_SUCCESS, GET_MY_INFO_FAILURE] = createRequestActionTypes('member/GET_MY_INFO');
const [UPDATE_MY_INFO, UPDATE_MY_INFO_SUCCESS, UPDATE_MY_INFO_FAILURE] =
  createRequestActionTypes('member/UPDATE_MY_INFO');
const [CHECK_NICKNAME_DUPLICATED, CHECK_NICKNAME_DUPLICATED_SUCCESS, CHECK_NICKNAME_DUPLICATED_FAILURE] =
  createRequestActionTypes('member/CHECK_NICKNAME_DUPLICATED');
const [DELETE_MY_INFO, DELETE_MY_INFO_SUCCESS, DELETE_MY_INFO_FAILURE] =
  createRequestActionTypes('member/DELETE_MY_INFO');

/**
 * 액션 생성 함수
 */
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const getMyInfo = createAction(GET_MY_INFO);
export const updateMyInfo = createAction(UPDATE_MY_INFO, (userInfo) => userInfo);
export const deleteMyInfo = createAction(DELETE_MY_INFO, (userInfo) => userInfo);
export const checkNicknameDuplicated = createAction(CHECK_NICKNAME_DUPLICATED, (nickname) => nickname);

/**
 * 사가 생성
 */
const getMyInfoSaga = createRequestSaga(GET_MY_INFO, memberAPI.getMyInfo);
const updateMyInfoSaga = createRequestSaga(UPDATE_MY_INFO, memberAPI.updateMyInfo);
const deleteMyInfoSaga = createRequestSaga(DELETE_MY_INFO, memberAPI.deleteMyInfo);
const checkNicknameDuplicatedSaga = createRequestSaga(CHECK_NICKNAME_DUPLICATED, memberAPI.checkNicknameDuplicated);

export function* memberSaga() {
  yield takeLatest(GET_MY_INFO, getMyInfoSaga);
  yield takeLatest(UPDATE_MY_INFO, updateMyInfoSaga);
  yield takeLatest(CHECK_NICKNAME_DUPLICATED, checkNicknameDuplicatedSaga);
  yield takeLatest(DELETE_MY_INFO, deleteMyInfoSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  // request
  nickname: '',
  statusMessage: '',
  imgUrl: '',
  isOpen: false,

  // 내 정보 받아오기, 닉네임 변경 response
  status: 0,
  message: '',
  data: {},
  timestamp: '',
  error: '',

  // 닉네임 중복 체크 responser
  duplicatedStatus: 0,
  duplicatedMessage: '',
  duplicatedData: null,
  duplicatedTimestamp: '',
  duplicatedError: '',

  //삭제 response
  deletedStatus: 0,
  deletedMessage: '',
  deletedData: '',
  deletedTimestamp: 0,
  deletedError: '',
};

const member = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [GET_MY_INFO_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      status,
      message,
      data,
      nickname: data.nickname,
      timestamp,
    }),
    [GET_MY_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UPDATE_MY_INFO_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      status,
      message,
      data,
      timestamp,
    }),
    [UPDATE_MY_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHECK_NICKNAME_DUPLICATED_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      duplicatedStatus: status,
      duplicatedMessage: message,
      duplicatedData: data,
      duplicatedTimestamp: timestamp,
    }),
    [CHECK_NICKNAME_DUPLICATED_FAILURE]: (state, { payload: error }) => ({
      ...state,
      duplicatedError: error,
    }),
    [DELETE_MY_INFO_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      deletedStatus: status,
      deletedMessage: message,
      deletedData: data,
      deletedTimestamp: timestamp,
    }),
    [DELETE_MY_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      deletedError: error,
    }),
  },
  initialState,
);

export default member;
