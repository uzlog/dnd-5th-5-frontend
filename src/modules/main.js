import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as aggreAPI from '@lib/api/aggregation';

/**
 * 액션 타입
 */
const [GET_TOTAL_USER, GET_TOTAL_USER_SUCCESS, GET_TOTAL_USER_FAILURE] =
  createRequestActionTypes('main/GET_TOTAL_USER');

/**
 * 액션 생성 함수
 */
export const getTotalUser = createAction(GET_TOTAL_USER);

/**
 * 사가 생성
 */
const getTotalUserSaga = createRequestSaga(GET_TOTAL_USER, aggreAPI.getTotalUser);

export function* mainSaga() {
  yield takeLatest(GET_TOTAL_USER, getTotalUserSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  getTotalUserStatus: 0,
  getTotalUserData: 0,
  getTotalUserError: '',
};

const main = handleActions(
  {
    [GET_TOTAL_USER_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      getTotalUserStatus: status,
      getTotalUserData: data,
    }),
    [GET_TOTAL_USER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getTotalUserError: error,
    }),
  },
  initialState,
);

export default main;
