import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as alaWordAPI from '../lib/api/alaWord';

// 액션 타입
const [ALA_WORD, ALA_WORD_SUCCESS, ALA_WORD_FAILURE] = createRequestActionTypes('alaWord/ALAWORD');

// 액션 생성 함수

export const getAlaWordList = createAction(ALA_WORD, ({ nickname, offset, cookieId }) => ({
  nickname,
  offset,
  cookieId,
}));

// saga

const alaWordListSaga = createRequestSaga(ALA_WORD, alaWordAPI.getAlaWordList);

export function* alaWordSaga() {
  yield takeLatest(ALA_WORD, alaWordListSaga);
}

const initialState = {
  alaWordStatus: 0,
  alaWordData: {},
  alaWordError: '',
};

const alaWord = handleActions(
  {
    [ALA_WORD_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      alaWordStatus: status,
      alaWordData: data,
    }),
    [ALA_WORD_FAILURE]: (state, { payload: error }) => ({
      ...state,
      alaWordError: error,
    }),
  },
  initialState,
);

export default alaWord;
