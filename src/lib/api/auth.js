import client from './client';

// google oauth
export const googleOauth = (userInfo) => client.post('/api/v1/oauth/jwt/google', userInfo);

// naver oauth
export const naverOauth = (userInfo) => client.post('/api/v1/oauth/jwt/naver', userInfo);

// 회원가입시 받아올 임시 정보
export const getMyInfo = () => client.get('/api/v1/member/me');

// 회원가입시 닉네임 변경 + 내 정보 변경에서도 사용
export const updateMyInfo = (userInfo) => client.patch('/api/v1/member/me', userInfo);
