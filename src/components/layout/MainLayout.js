import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  /* width: 100%; */
  background-color: yellow;
  @media screen and (max-width: px) {
    background-color: red;
  }
`;

const MainLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainLayout;
