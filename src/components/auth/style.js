import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ExitButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 15px;
  margin-top: 15px;
`;

export const ExitButton = styled.button`
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
export const Header = styled.div`
  height: 56px;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: #000000;
  margin-top: 119px;
  @media screen and (max-width: 767px) {
    margin-top: 78px;
    font-size: 24px;
    line-height: 1.6;
    height: 38px;
  }
`;

export const StyledParagraph = styled.span`
  text-align: center;
  margin-top: 52px;
  @media screen and (max-width: 767px) {
    margin-top: 27px;
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 52px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 41px;
  }
`;

export const GoogleButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 64px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 22px 16px;
  border-radius: 50px;
  box-shadow: -1px 2px 25px 10px rgba(0, 0, 0, 0.04);
  background-color: var(--primary-color-white);
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  margin-right: 36px;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-bottom: 28px;
  }
`;

export const NaverButton = styled.button`
  cursor: pointer;
  width: 180px;
  height: 64px;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 22px 16px;
  border-radius: 50px;
  background-color: #19ce60;
  border: none;
  outline: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const StyledInfoParagraph = styled.p`
  height: 38px;
  opacity: 0.5;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.5px;
  text-align: center;
  color: var(--gray-color-gray-2-a-2-a-2-a);
  margin-top: 52px;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;
