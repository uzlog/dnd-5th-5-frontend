import client from './client';

// google oauth
export const googleOauth = (userInfo) => client.post('/api/v1/oauth/jwt/google', userInfo);

// naver oauth
export const naverOauth = (userInfo) => client.post('/api/v1/oauth/jwt/naver', userInfo);
