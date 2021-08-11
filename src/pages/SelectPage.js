import React from 'react';
import SelectContainer from '@containers/select/SelectContainer';
import LeftSide from '@components/common/LeftSide';
import styled from 'styled-components';
import useResponsive from '../hooks/useResponsive';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SelectPage = () => {
  const viewSize = useResponsive();

  return (
    <Wrapper>
      {viewSize > 1023 ? <LeftSide /> : <></>}
      <SelectContainer />
    </Wrapper>
  );
};

export default SelectPage;
