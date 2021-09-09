import useSWR from 'swr';
import client from '@lib/api/client';

const KEY = 'api/v1/alarm';

const useGetAlarm = () => {
  const { data, error, mutate } = useSWR(KEY, (url) => client.get(url).then((res) => res.data), {
    shouldRetryOnError: false,
  });
  return {
    data,
    getAlarmDataLoading: data ? true : false,
    getAlarmDataError: error,
    mutate,
  };
};

export default useGetAlarm;
