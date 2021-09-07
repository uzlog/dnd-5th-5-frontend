import client from './client';

export const getAlaWordList = ({ nickname, cookieId, offset }) =>
  client.get('/api/v2/alacard/wordlist', { params: { nickname, cookieId, offset } });
