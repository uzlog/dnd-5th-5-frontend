const useGetTime = (date) => {
  const prevTimestamp = Date.parse(date);
  const curTimestamp = Date.parse(new Date());
  const timeInterval = curTimestamp - prevTimestamp;
  let time;
  if (timeInterval < 1000 * 60) {
    time = Math.floor(timeInterval / 1000) + '초 전';
  } else if (timeInterval < 1000 * 60 * 60) {
    time = Math.floor(timeInterval / (1000 * 60)) + '분 전';
  } else if (timeInterval < 1000 * 60 * 60 * 24) {
    time = Math.floor(timeInterval / (1000 * 60 * 60)) + '시간 전';
  } else if (timeInterval < 1000 * 60 * 60 * 24 * 30) {
    time = Math.floor(timeInterval / (1000 * 60 * 60 * 24)) + '일 전';
  } else if (timeInterval < 1000 * 60 * 60 * 24 * 30 * 12) {
    time = Math.floor(timeInterval / (1000 * 60 * 60 * 24 * 30)) + '달 전';
  } else {
    time = Math.floor(timeInterval / (1000 * 60 * 60 * 24 * 30 * 12)) + '년 전';
  }
  return time;
};

export default useGetTime;
