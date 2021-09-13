import React from 'react';
import { ModalWrapper, ModalOverlay, ModalContents, Layout, Header, EmptyWrapper } from './style';
import closeBtn from '@assets/img/modal/closeBtn.svg';

const AlarmErrorModal = ({ apiCall }) => {
  const { onClickModalStatus } = apiCall;
  const closeAlarmModal = () => {
    onClickModalStatus({ key: 'showAlarmModal', value: false });
  };
  return (
    <ModalWrapper>
      <ModalOverlay onClick={() => closeAlarmModal()} />
      <ModalContents>
        <Layout>
          <Header>
            <span>알림</span>
            <img src={closeBtn} alt="닫기 버튼" onClick={closeAlarmModal} />
          </Header>
          <EmptyWrapper>알림이 없습니다.</EmptyWrapper>
        </Layout>
      </ModalContents>
    </ModalWrapper>
  );
};

export default AlarmErrorModal;
