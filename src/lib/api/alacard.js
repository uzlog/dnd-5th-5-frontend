import client from './client';

// 알라카드 목록 받아오기
export const getAlaCardList = (nickname) => client.get('/api/v1/alacard/alacardlist', { params: { nickname } });

// 알라카드 배경 받아오기
export const getAlaCardBg = () => client.get('/api/v1/alacard/backgrounds');
