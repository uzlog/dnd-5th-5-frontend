import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

/**
 * 액션 타입
 */
const [GOOGLE_OAUTH, GOOGLE_OAUTH_SUCCESS, GOOGLE_OAUTH_FAILURE] = createRequestActionTypes('auth/GOOGLE_OAUTH');
const [NAVER_OAUTH, NAVER_OAUTH_SUCCESS, NAVER_OAUTH_FAILURE] = createRequestActionTypes('auth/NAVER_OAUTH');
const CHECK_TOKEN_EXISTED = 'auth/CHECK_TOKEN_EXISTED';

/**
 * 액션 생성 함수
 */
export const googleOauth = createAction(GOOGLE_OAUTH, (userInfo) => userInfo);
export const naverOauth = createAction(NAVER_OAUTH, (userInfo) => userInfo);
export const checkTokenExisted = createAction(CHECK_TOKEN_EXISTED, (token) => token);

/**
 * 사가 생성
 */
const googleOauthSaga = createRequestSaga(GOOGLE_OAUTH, authAPI.googleOauth);
const naverOauthSaga = createRequestSaga(NAVER_OAUTH, authAPI.naverOauth);

export function* authSaga() {
  yield takeLatest(GOOGLE_OAUTH, googleOauthSaga);
  yield takeLatest(NAVER_OAUTH, naverOauthSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  status: 0,
  message: '',
  token: '',
  timestamp: 0,
  tokenExisted: true,
};

const auth = handleActions(
  {
    [GOOGLE_OAUTH_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      status,
      message,
      token: data,
      timestamp,
    }),
    [GOOGLE_OAUTH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [NAVER_OAUTH_SUCCESS]: (state, { payload: { status, message, data, timestamp } }) => ({
      ...state,
      status,
      message,
      token: data,
      timestamp,
    }),
    [NAVER_OAUTH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CHECK_TOKEN_EXISTED]: (state, { payload: token }) => ({
      ...state,
      tokenExisted: token,
    }),
  },
  initialState,
);

export default auth;
