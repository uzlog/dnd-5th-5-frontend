import client from './client';

// 알람 받아오기
export const getAlarmData = () => client.get('/api/v1/alarm');
