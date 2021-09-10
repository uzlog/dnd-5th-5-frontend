import React from 'react';
import styled from 'styled-components';
import { ModalWrapper, ModalOverlay, ModalContents } from './style';
import closeBtn from '@assets/img/modal/closeBtn.svg';
import FriendInfo from './FriendInfo';
import AlarmInfo from './AlarmInfo';
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

const AlarmContents = styled.div`
  padding: 10px 0px;
  margin-bottom: 20px;
  display: flex;
  max-width: 460.8px;
  width: 32vw;
  max-height: 188px;
  height: 18.4vh;
  &:first-child {
    margin-top: 57.6px;
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-left: min(1.7vw, 25.6px);
  }

  @media screen and (max-width: 1023px) {
    width: 288px;
    height: 118px;
  }
`;

const AlarmModal = ({ state, apiCall }) => {
  const { getAlarmDataList } = state;
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
          {getAlarmDataList === !undefined ? (
            <EmptyWrapper>알림이 없습니다.</EmptyWrapper>
          ) : (
            <div>
              {getAlarmDataList.map((data) => {
                return (
                  <AlarmContents>
                    {data.category === 'FRIEND_ALARM' && <FriendInfo data={data} apiCall={apiCall} />}
                    {data.category === 'NOTICE_ALARM' && <AlarmInfo data={data} />}
                  </AlarmContents>
                );
              })}
            </div>
          )}
        </Layout>
      </ModalContents>
    </ModalWrapper>
  );
};

export default AlarmModal;
