import client from './client';

// 셀렉뷰 공유 링크 받아오기
export const getSelectViewLink = (nickname) => client.get(`/api/v1/member/sharelink`, { params: { nickname } });
