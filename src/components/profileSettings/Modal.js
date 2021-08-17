import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import emoji_sad from '@assets/img/emoji/emoji_sad.svg';

const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Emoji = styled.div`
  font-size: 60px;
  @media screen and (min-width: 1023px) {
    font-size: 96px;
  }
`;

const Announce = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  @media screen and (min-width: 1023px) {
    font-size: 29px;
    margin-bottom: 29px;
  }
`;
const Alert = styled.div`
  font-size: 12px;
  color: #fc3e57;
  @media screen and (min-width: 1023px) {
    font-size: 19px;
  }
`;
const Confirm = styled.div`
  margin-top: 22px;
  font-size: 12px;
  display: flex;
  height: 16px;
  align-items: center;
  @media screen and (min-width: 1023px) {
    font-size: 19px;
  }
`;

export const DeleteButton = styled.button`
  color: white;
  background-color: black;
  width: 134px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px white;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(2.6rem, 3vh);
    width: 200px;
    height: 74px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const CanceleButton = styled.button`
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 46px;
  font-size: 16px;
  margin: 0 auto;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: min(2.6rem, 3vh);
    width: 160px;
    height: 74px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const ButtonWrapper = styled.span`
  border: 0;
  width: 264px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 1023px) {
    margin-top: 39px;

    width: 423px;
  }
`;

const Modal = ({ setDeleteModal, onDeleteHandler }) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  return (
    <ModalWrapper>
      <ModalOverlay onClick={() => setDeleteModal(false)} />
      <ModalContents style={{ color: 'black' }}>
        <ContentWrapper>
          <Emoji>
            <img src={emoji_sad} />
          </Emoji>
          <Announce>정말 탈퇴하시겠어요?</Announce>
          <Alert>*카드, 프로필 등 모든 데이터가 삭제됩니다. </Alert>
          <Alert> *모든 데이터 복구가 불가능합니다.</Alert>
          <Confirm onClick={() => setDeleteConfirm(!deleteConfirm)}>
            <input
              type="checkbox"
              onChange={() => {
                setDeleteConfirm(!deleteConfirm);
              }}
              checked={deleteConfirm}></input>
            &nbsp; 안내사항을 모두 확인하였으며, 이에 동의합니다.
          </Confirm>
          <ButtonWrapper>
            <DeleteButton
              style={deleteConfirm ? { opacity: 1 } : { opacity: 0.2 }}
              disabled={deleteConfirm ? false : true}
              onClick={onDeleteHandler}>
              네, 탈퇴할래요
            </DeleteButton>
            <CanceleButton onClick={() => setDeleteModal(false)}>취소</CanceleButton>
          </ButtonWrapper>
        </ContentWrapper>
      </ModalContents>
    </ModalWrapper>
  );
};

export default Modal;
