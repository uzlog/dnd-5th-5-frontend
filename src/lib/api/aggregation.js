import client from './client';

// 사용자 집계 가져오기
export const getTotalUser = () => client.get('/api/v1/aggregation/usercount');
