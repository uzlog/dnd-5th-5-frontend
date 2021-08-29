import { createAction, handleActions } from 'redux-actions';

/**
 * 액션 타입
 */
const UPDATE_MODAL_STATUS = 'friend/UPDATE_MODAL_STATUS';
const OPEN_PROFILE_MODAL = 'modal/OPEN_PROFILE_MODAL';

/**
 * 액션 생성 함수
 */
export const updateModalStatus = createAction(UPDATE_MODAL_STATUS, ({ key, value }) => ({
  key,
  value,
}));
export const openProfileModal = createAction(OPEN_PROFILE_MODAL);

/**
 * 초기 상태
 */
const initialStae = {
  showLoginModal: false,
  showFriendModal: false,
  showAlarmModal: false,
  showFollowerModal: false,
  showProfileModal: false,
  showDeleteFriendModal: false,
  showCancelFollowModal: false,
};

const modal = handleActions(
  {
    [UPDATE_MODAL_STATUS]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [OPEN_PROFILE_MODAL]: (state, action) => ({
      ...state,
      showProfileModal: action.payload,
    }),
  },
  initialStae,
);

export default modal;
