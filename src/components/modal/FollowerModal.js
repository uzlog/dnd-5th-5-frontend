import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import closeBtn from '@assets/img/modal/closeBtn.svg';
import avatar from '@assets/img/modal/avatar.svg';

const Header = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.6;
  margin: 0 auto;
  max-width: 460px;
  width: 31.9vw;
  font-size: min(3.1vh, 5.5vw, 32px);
  img {
    cursor: pointer;
    max-width: 38.4px;
    max-height: 38.4px;
    width: 2.6vw;
    height: 3.75vh;
  }
  @media screen and (max-width: 1023px) {
    font-size: 20px;
    width: 290px;
    img {
      cursor: pointer;
      width: 24px;
      height: 24px;
    }
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: min(2.2vw, 3.1vh, 32px);
  @media screen and (max-width: 1023px) {
    margin-top: 20px;
  }
`;

const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  line-height: 1.6;
  font-weight: normal;
  color: #000;
  font-size: min(calc((1.7vw + 2.5vh) / 2), 25.6px);
  @media screen and (max-width: 1023px) {
    font-size: 16px;
  }
`;

const AvatarImg = styled.img`
  max-width: 64px;
  width: 4.4vw;
  max-height: 64px;
  height: 6.25vh;
  border-radius: 50px;
  @media screen and (max-width: 1023px) {
    width: 40px;
    height: 40px;
  }
`;

const FollowerWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const FollowerContents = styled.div`
  display: flex;
  max-width: 460.8px;
  width: 32vw;
  max-height: 188px;
  height: 18.4vh;
  &:first-child {
    margin-top: 57.6px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: min(1.7vw, 25.6px);
  }

  @media screen and (max-width: 1023px) {
    width: 288px;
    height: 118px;
  }
`;

const AlarmTitle = styled.span`
  color: #64748b;
  font-size: min(1.3vw, 16px);
  font-weight: normal;
  line-height: 1.6;
  text-align: left;
  @media screen and (max-width: 1023px) {
    font-size: 10px;
  }
`;

const AlarmMessage = styled.span`
  color: #121212;
  font-size: min(1.5vw, 19.2px);
  @media screen and (max-width: 1023px) {
    font-size: 12px;
  }
`;

const HI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 330px;
  width: 24vw;
  max-height: 141.4px;
  height: 13.8vh;
  @media screen and (max-width: 1023px) {
    height: 88px;
    width: 207px;
  }
`;

const ButtonWrapper = styled.div``;

const StyledButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  max-width: 62px;
  width: 4.3vw;
  max-height: 44px;
  height: 4.3vh;
  border-radius: 4.8px;
  margin-right: 15px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  @media screen and (max-width: 1023px) {
    width: 39px;
    height: 27px;
    border-radius: 3px;
    margin-right: 8px;
  }
`;

const FollowerModal = ({ state, apiCall }) => {
  const { getFollowerListData } = state;
  const { onClickAcceptFollow, onClickDeclineFollow, onClickModalStatus } = apiCall;

  const closeFollowerModal = () => {
    onClickModalStatus({ key: 'showFollowerModal', value: false });
  };

  return (
    <ModalWrapper>
      <ModalOverlay onClick={closeFollowerModal} />
      <ModalContents>
        <Layout>
          <Header>
            <span>알림</span>
            <img src={closeBtn} alt="닫기 버튼" onClick={closeFollowerModal} />
          </Header>
          {getFollowerListData === undefined ? (
            <EmptyWrapper>알림이 없습니다.</EmptyWrapper>
          ) : (
            <FollowerWrapper>
              {getFollowerListData.map((data) => {
                return (
                  <FollowerContents>
                    <AvatarImg src={avatar} alt="아바타" />
                    <HI>
                      <AlarmTitle>친구요청</AlarmTitle>
                      <AlarmMessage>
                        <span style={{ fontWeight: 'bold' }}>{data.nickname}</span>님이 친구가 되고 싶어합니다!
                      </AlarmMessage>
                      <ButtonWrapper>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <StyledButton bg="#121212" color="white" onClick={() => onClickAcceptFollow(data.nickname)}>
                            수락
                          </StyledButton>
                          <StyledButton bg="#fc3e57" color="white" onClick={() => onClickDeclineFollow(data.nickname)}>
                            거절
                          </StyledButton>
                        </div>
                      </ButtonWrapper>
                    </HI>
                  </FollowerContents>
                );
              })}
            </FollowerWrapper>
          )}
        </Layout>
      </ModalContents>
    </ModalWrapper>
  );
};

export default FollowerModal;
