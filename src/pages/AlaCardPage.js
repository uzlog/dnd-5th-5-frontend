import React from 'react';
import styled from 'styled-components';
import useResponsive from '../hooks/useResponsive';
import AlaCardListContainer from '@containers/alacard/AlaCardListContainer';
import LeftSide from '@components/common/LeftSide';
import Footer from '@components/common/Footer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const AlaCardPage = () => {
  const viewSize = useResponsive();

  return (
    <Wrapper>
      {viewSize > 1023 ? (
        <>
          <LeftSide />
          <AlaCardListContainer />
        </>
      ) : (
        <>
          <AlaCardListContainer />
          <Footer />
        </>
      )}
    </Wrapper>
  );
};

export default AlaCardPage;
