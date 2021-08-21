import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkTokenExisted } from '@modules/auth';
import Cookies from 'universal-cookie';

const useWatchCookie = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const originToken = cookies.get('token');

  useEffect(() => {
    const newToken = cookies.get('token');
    if (originToken !== newToken) {
    }
  }, []);

  let watcher = setInterval(() => {
    const newToken = cookies.get('token');
    if (originToken !== newToken) {
      if (newToken === undefined) {
        clearInterval(watcher);
        dispatch(checkTokenExisted(false));
      }
    }
  }, 1000 * 5);
};

export default useWatchCookie;
