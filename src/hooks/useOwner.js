import { useState, useEffect } from 'react';

const useOwner = (userInfo) => {
  const [isOwned, setIsOwned] = useState(false);
  const { nickname, urlNickname } = userInfo;
  useEffect(() => {
    if (urlNickname === nickname) {
      setIsOwned(true);
    }
  }, []);
  return isOwned;
};

export default useOwner;
