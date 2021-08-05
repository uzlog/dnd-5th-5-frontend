import { createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입
 */
const UPDATE_MODAL_STATUS = 'friend/UPDATE_MODAL_STATUS';

/**
 * 액션 생성 함수
 */
export const updateModalStatus = createAction(UPDATE_MODAL_STATUS, ({ key, value }) => ({
  key,
  value,
}));

/**
 * 초기 상태
 */
const initialStae = {
  showFriendModal: false,
  showAlarmModal: false,
};

const modal = handleActions(
  {
    [UPDATE_MODAL_STATUS]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialStae,
);

export default modal;
