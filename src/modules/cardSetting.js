import { createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입
 */

// 카드 클릭시, 카드 정보를 스토어에 올리기 위한 액션
const UPLOAD_CARD_INFO = 'cardSetting/UPLOAD_CARD_INFO';

/**
 * 액션 생성 함수
 */
export const uploadCardInfo = createAction(UPLOAD_CARD_INFO, (originCardInfo) => originCardInfo);

/**
 * 초기 상태
 */
const initialState = {
  // 기존 카드 정보
  originCardFont: '',
  originCardImg: '',
  originCardSentence: '',
};

const cardSetting = handleActions(
  {
    [UPLOAD_CARD_INFO]: (state, { payload: { originCardFont, originCardImg, originCardSentence } }) => ({
      ...state,
      originCardFont,
      originCardImg,
      originCardSentence,
    }),
  },
  initialState,
);

export default cardSetting;
