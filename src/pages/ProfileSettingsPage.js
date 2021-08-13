import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import useResponsive from '../hooks/useResponsive';

import ProfileSettingsContainer from '@containers/profileSettings/ProfileSettingsContainer';
import LeftSide from '@components/common/LeftSide';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;
const ProfileSettingsPage = () => {
  const viewSize = useResponsive();

  return (
    <Wrapper>
      {viewSize > 1023 ? <LeftSide /> : <></>}
      <ProfileSettingsContainer />
    </Wrapper>
  );
};

export default withRouter(ProfileSettingsPage);
