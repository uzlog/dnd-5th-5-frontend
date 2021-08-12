import React from 'react';
import styled from 'styled-components';
import useResponsive from '../hooks/useResponsive';
import AlaCardSettingComponent from '@components/alacard/AlaCardSettingComponent';
import LeftSide from '@components/common/LeftSide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const CardSettingPage = () => {
  const viewSize = useResponsive();

  return (
    <Wrapper>
      {viewSize > 1023 ? <LeftSide /> : <></>}
      <AlaCardSettingComponent />
    </Wrapper>
  );
};

export default CardSettingPage;
