import client from './client';

// 정보 받아오기
export const getMyInfo = () => client.get('/api/v1/member/me');

// 회원 탈퇴
export const deleteMyInfo = (userInfo) => client.patch('/api/v1/member/delete', userInfo);

// 회원가입시 닉네임 변경 + 내 정보 변경에서도 사용
export const updateMyInfo = (userInfo) => client.patch('/api/v1/member/me', userInfo);

// 닉네임 중복 확인
export const checkNicknameDuplicated = (userInfo) =>
  client.get('/api/v1/member/exists', { params: { nickname: userInfo.nickname } });
