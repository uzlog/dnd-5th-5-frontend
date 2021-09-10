import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as alarmAPI from '@lib/api/alarm';

/**
 * 액션 타입
 */
const [GET_ALRAM_DATA, GET_ALRAM_DATA_SUCCESS, GET_ALRAM_DATA_FAILURE] =
  createRequestActionTypes('friend/GET_ALRAM_DATA');

/**
 * 액션 생성 함수
 */
export const getAlarmData = createAction(GET_ALRAM_DATA);

/**
 * 사가 생성
 */
const getAlarmDataSaga = createRequestSaga(GET_ALRAM_DATA, alarmAPI.getAlarmData);

export function* alarmSaga() {
  yield takeLatest(GET_ALRAM_DATA, getAlarmDataSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  getAlarmDataStatus: 0,
  getAlarmDataList: [],
  getAlarmDataError: '',
};

const alarm = handleActions(
  {
    [GET_ALRAM_DATA_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      getAlarmDataStatus: status,
      getAlarmDataList: data,
    }),
    [GET_ALRAM_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      getAlarmDataError: error,
    }),
  },
  initialState,
);

export default alarm;
