import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from '@components/modal/style';

const Wrapper = styled.div`
  max-width: 423px;
  width: 29.3vw;
  max-height: 355px;
  height: 34.6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 264px;
    height: 216px;
  }
`;

const Header = styled.div`
  color: #000;
  text-align: center;
  line-height: 1.6;
  font-size: min(calc((2vw + 2.8vh) / 2), 28.8px);
  font-weight: bold;
  @media screen and (max-width: 1023px) {
    font-size: 18px;
  }
`;

const StyledDescription = styled.div`
  font-size: min(calc((1.6vw + 2.1vh) / 2), 22.4px);
  font-weight: normal;
  line-height: 1.6;
  letter-spacing: -0.16px;
  text-align: center;
  color: #000;
  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 198px;
  width: 13.75vw;
  max-height: 73px;
  height: 7.1vh;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  line-height: 1.6;
  font-size: min(calc((1.78vw + 2.5vh) / 2), 25.6px);
  border-radius: 99.2px;
  @media screen and (max-width: 1023px) {
    width: 124px;
    height: 46px;
    font-size: 16px;
  }
`;

const DeleteFriendComponent = ({ state, apiCall }) => {
  const { nickname, showDeleteFriendModal, showCancelFollowModal } = state;
  const { onClickUpdateModalStatus, onClickDeleteFriend, onClickCancelFollow } = apiCall;

  const closeDeleteFriendModal = () => {
    onClickUpdateModalStatus({ key: 'showDeleteFriendModal', value: false });
  };

  const closeCancelFollowModal = () => {
    onClickUpdateModalStatus({ key: 'showCancelFollowModal', value: false });
  };

  const deleteFriend = () => {
    onClickDeleteFriend(nickname);
  };

  const cancelFollow = () => {
    onClickCancelFollow(nickname);
  };

  return (
    <ModalWrapper>
      {showDeleteFriendModal && <ModalOverlay onClick={() => closeDeleteFriendModal()} />}
      {showCancelFollowModal && <ModalOverlay onClick={() => closeCancelFollowModal()} />}
      <ModalContents delete="delete" style={{ display: 'flex', justifyContent: 'center' }}>
        <Wrapper>
          <Header>
            {showDeleteFriendModal && (
              <>
                {nickname}님과의
                <br /> 친구 관계를 끊으시겠어요?
              </>
            )}
            {showCancelFollowModal && (
              <>
                {nickname}님한테 보낸
                <br /> 친구 요청을 취소할까요?
              </>
            )}
          </Header>
          <StyledDescription>
            {showDeleteFriendModal && <>서로의 친구 목록에서 삭제됩니다.</>}
            {showCancelFollowModal && <>언제든지 다시 요청할 수 있습니다.</>}
          </StyledDescription>
          <ButtonWrapper>
            {showDeleteFriendModal && (
              <>
                <StyledButton bg="#121212" color="white" onClick={deleteFriend}>
                  네, 끊을래요
                </StyledButton>
                <StyledButton bg="white" color="#121212" border="1.6px solid #121212" onClick={closeDeleteFriendModal}>
                  취소
                </StyledButton>
              </>
            )}
            {showCancelFollowModal && (
              <>
                <StyledButton bg="#121212" color="white" onClick={cancelFollow}>
                  네, 취소할래요
                </StyledButton>
                <StyledButton bg="white" color="#121212" border="1.6px solid #121212" onClick={closeCancelFollowModal}>
                  안할래요
                </StyledButton>
              </>
            )}
          </ButtonWrapper>
        </Wrapper>
      </ModalContents>
    </ModalWrapper>
  );
};

export default DeleteFriendComponent;
