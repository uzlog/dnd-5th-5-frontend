import client from './client';

// 친구 목록 불러오기
export const getFriendList = () => client.get('/api/v1/friend');
