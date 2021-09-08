import styled from 'styled-components';

export const HoverLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  width: max-content;
  p {
    margin-left: 10px;
    display: inline;
    opacity: 0.5;
    transition: 0.3s;
  }
  div {
    opacity: 1;
    min-width: 40px;
    min-height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    span {
      background-image: url(${(props) => props.url});
      width: 32px;
      height: 32px;
      background-size: cover;
      transition: 0.3s;
    }
    :hover {
      span {
        width: 36px;
        height: 36px;
        overflow: visible;
      }
    }
  }
  :hover {
    p {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
  background-color: #121212;
  max-width: 576px;
  width: 40vw;
  height: 9.4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  @media screen and (max-width: 1023px) {
    margin: 0 auto;
    width: 360px;
    height: 60px;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 500px;
  width: 35vw;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1023px) {
    width: 308px;
  }
`;

export const FooterContents = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  line-height: 1.6;
  color: #ffffff;
  p {
    opacity: 0.5;
  }
`;

export const FooterLink = styled.a`
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.5;
  padding-left: 12px;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;
