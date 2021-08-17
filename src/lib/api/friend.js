import client from './client';

// 친구 목록 불러오기
export const getFriendList = () => client.get('/api/v1/friend');

// 친구 관계 확인하기
export const getRelation = (nickname) => client.get(`/api/v1/friend/relation/${nickname}`);

// 친구 팔로우
export const sendFollow = (nickname) => client.patch(`/api/v1/friend/${nickname}`);

// 친구 수락
export const acceptFollow = (nickname) => client.patch(`/api/v1/friend/accept/${nickname}`);

// 친구 거절
export const declineFollow = (nickname) => client.patch(`/api/v1/friend/decline/${nickname}`);

// 친구 취소
export const cancelFollow = (nickname) => client.patch(`/api/v1/friend/cancel/${nickname}`);

// 친구 삭제
export const deleteFriend = (nickname) => client.delete(`/api/v1/friend/${nickname}`);
