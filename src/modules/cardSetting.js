import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as alacardAPI from '@lib/api/alacard';

/**
 * 액션 타입
 */

// 카드 클릭시, 카드 정보를 스토어에 올리기 위한 액션
const UPLOAD_CARD_INFO = 'cardSetting/UPLOAD_CARD_INFO';
const [GET_ALA_CARD_BG, GET_ALA_CARD_BG_SUCCESS, GET_ALA_CARD_BG_FAILURE] =
  createRequestActionTypes('cardSetting/GET_ALA_CARD_BG');

/**
 * 액션 생성 함수
 */
export const uploadCardInfo = createAction(UPLOAD_CARD_INFO, (originCardInfo) => originCardInfo);
export const getAlaCardBg = createAction(GET_ALA_CARD_BG);

/**
 * 사가 생성
 */
const getAlaCardBgSaga = createRequestSaga(GET_ALA_CARD_BG, alacardAPI.getAlaCardBg);

export function* cardSettingSaga() {
  yield takeLatest(GET_ALA_CARD_BG, getAlaCardBgSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  // 기존 카드 정보
  originCardFont: '',
  originCardImg: '',
  originCardSentence: '',

  // 배경 정보
  alaCardBgStatus: 0,
  alaCardBgSolid: [],
  alaCardBgGrad: [],
  alaCardBgPhoto: [],
  alaCardBgError: '',
};

const cardSetting = handleActions(
  {
    [UPLOAD_CARD_INFO]: (state, { payload: { originCardFont, originCardImg, originCardSentence } }) => ({
      ...state,
      originCardFont,
      originCardImg,
      originCardSentence,
    }),
    [GET_ALA_CARD_BG_SUCCESS]: (state, { payload: { status, data } }) => ({
      ...state,
      alaCardBgStatus: status,
      alaCardBgGrad: data.splice(0, 10),
      alaCardBgPhoto: data.splice(0, 10),
      alaCardBgSolid: data.splice(0, 15),
    }),
    [GET_ALA_CARD_BG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      alaCardBgError: error,
    }),
  },
  initialState,
);

export default cardSetting;
