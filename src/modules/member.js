import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

/**
 * 액션 타입
 */
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const [GET_MY_INFO, GET_MY_INFO_SUCCESS, GET_MY_INFO_FAILURE] = createRequestActionTypes('auth/GET_MY_INFO');
const [UPDATE_MY_INFO, UPDATE_MY_INFO_SUCCESS, UPDATE_MY_INFO_FAILURE] =
  createRequestActionTypes('auth/UPDATE_MY_INFO');

/**
 * 액션 생성 함수
 */
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({ key, value }));
export const getMyInfo = createAction(GET_MY_INFO);
export const updateMyInfo = createAction(UPDATE_MY_INFO, (userInfo) => userInfo);

/**
 * 사가 생성
 */
const getMyInfoSaga = createRequestSaga(GET_MY_INFO, authAPI.getMyInfo);
const updateMyInfoSaga = createRequestSaga(UPDATE_MY_INFO, authAPI.updateMyInfo);

export function* memberSaga() {
  yield takeLatest(GET_MY_INFO, getMyInfoSaga);
  yield takeLatest(UPDATE_MY_INFO, updateMyInfoSaga);
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

  // response
  status: 0,
  message: '',
  data: {},
  timestamp: '',
  error: '',
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
  },
  initialState,
);

export default member;
