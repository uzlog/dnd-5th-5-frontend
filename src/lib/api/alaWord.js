import client from './client';

export const getAlaWordList = (nickname, offset) =>
  client.get(`/api/v1/alacard/wordlist`, { params: { nickname: 'babo', offset: 0 } });
