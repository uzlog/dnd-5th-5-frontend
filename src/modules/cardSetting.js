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
const [UPDATE_CARD_INFO, UPDATE_CARD_INFO_SUCCESS, UPDATE_CARD_INFO_FAILURE] =
  createRequestActionTypes('cardSetting/UPDATE_CARD_INFO');
const INITIALIZE_UPDATE = 'cardSetting/INITIALIZE_UPDATE';

/**
 * 액션 생성 함수
 */
export const uploadCardInfo = createAction(UPLOAD_CARD_INFO, (originCardInfo) => originCardInfo);
export const getAlaCardBg = createAction(GET_ALA_CARD_BG);
export const updateCardInfo = createAction(UPDATE_CARD_INFO, (cardInfo) => cardInfo);

/**
 * 사가 생성
 */
const getAlaCardBgSaga = createRequestSaga(GET_ALA_CARD_BG, alacardAPI.getAlaCardBg);
const updateCardInfoSaga = createRequestSaga(UPDATE_CARD_INFO, alacardAPI.updateCardInfo);

export function* cardSettingSaga() {
  yield takeLatest(GET_ALA_CARD_BG, getAlaCardBgSaga);
  yield takeLatest(UPDATE_CARD_INFO, updateCardInfoSaga);
}

/**
 * 초기 상태
 */
const initialState = {
  // 기존 카드 정보
  originCardInfo: {},

  // 배경 정보
  alaCardBgStatus: 0,
  alaCardBgSolid: [],
  alaCardBgGrad: [],
  alaCardBgPhoto: [],
  alaCardBgError: '',

  // 카드 정보 업데이트
  updateCardInfoMessage: '',
  updateCardInfoError: '',
};

const cardSetting = handleActions(
  {
    [UPLOAD_CARD_INFO]: (state, { payload: originCardInfo }) => ({
      ...state,
      originCardInfo,
    }),
    [GET_ALA_CARD_BG_SUCCESS]: (
      state,
      {
        payload: {
          status,
          data: { Gradient, Photo, Solid },
        },
      },
    ) => ({
      ...state,
      alaCardBgStatus: status,
      alaCardBgGrad: Gradient,
      alaCardBgPhoto: Photo,
      alaCardBgSolid: Solid,
    }),
    [GET_ALA_CARD_BG_FAILURE]: (state, { payload: error }) => ({
      ...state,
      alaCardBgError: error,
    }),
    [UPDATE_CARD_INFO_SUCCESS]: (state) => ({
      ...state,
      updateCardInfoMessage: 'success',
    }),
    [UPDATE_CARD_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      updateCardInfoError: error,
    }),
  },
  initialState,
);

export default cardSetting;
