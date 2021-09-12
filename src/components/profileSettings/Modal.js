import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import check from '@assets/img/profileSettings/check.svg';
import uncheck from '@assets/img/profileSettings/uncheck.svg';

const ContentWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Emoji = styled.p`
  font-size: 50px;
  margin-bottom: 26px;
  @media screen and (min-width: 1023px) {
    font-size: 80px;
    margin-bottom: 32px;
  }
`;

const Announce = styled.div`
  font-size: 18px;
  font-family: 'spoqaHanSansBold';
  margin-bottom: 15px;
  @media screen and (min-width: 1023px) {
    font-size: 29px;
    margin-bottom: 29px;
  }
`;
const Alert = styled.div`
  text-align: center;
  line-height: 1.6;
  font-size: 12px;
  color: #fc3e57;
  @media screen and (min-width: 1023px) {
    font-size: 19px;
  }
`;
const Confirm = styled.div`
  margin-top: 22px;
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 16px;
  align-items: center;
  transform: 0.3s;
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
    font-size: 20px;
    width: 200px;
    height: 74px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const CanceleButton = styled.button`
  color: black;
  background-color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 114px;
  height: 46px;
  font-size: 16px;
  padding: 11px 14px 11px 14px;
  border-radius: 62px;
  border: solid 1px;
  @media screen and (min-width: 1023px) {
    border: solid 1.6px;
    font-size: 20px;
    width: 160px;
    height: 74px;
    padding: 17.6px 22.4px 18.2px 22.4px;
  }
`;
export const ButtonWrapper = styled.span`
  border: 0;
  width: 264px;
  display: flex;
  justify-content: space-evenly;
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
          <Emoji>😭</Emoji>
          <Announce>정말 탈퇴하시겠어요?</Announce>
          <Alert>
            *카드, 프로필 등 모든 데이터가 삭제됩니다.
            <br />
            *모든 데이터 복구가 불가능합니다.
          </Alert>
          <Confirm onClick={() => setDeleteConfirm(!deleteConfirm)}>
            <img src={deleteConfirm ? check : uncheck} />
            &nbsp; 안내사항을 모두 확인하였으며, 이에 동의합니다.
          </Confirm>
          <ButtonWrapper>
            <DeleteButton
              style={deleteConfirm ? { opacity: 1, cursor: 'pointer' } : { opacity: 0.2 }}
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
