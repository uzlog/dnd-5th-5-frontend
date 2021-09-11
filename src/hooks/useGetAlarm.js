import useSWR from 'swr';
import Cookies from 'universal-cookie';
import client from '@lib/api/client';

const KEY = 'api/v1/alarm';

const useGetAlarm = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const { data, error, mutate } = useSWR(token ? KEY : null, (url) => client.get(url).then((res) => res.data), {
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
