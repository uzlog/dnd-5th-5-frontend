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
    margin-left: 10px;
    min-width: 40px;
    min-height: 40px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    span {
      opacity: 1;
      background-image: url(${(props) => props.url});
      min-width: 32px;
      min-height: 32px;
      background-size: cover;
      transition: 0.3s;
    }
  }
  :hover {
    p {
      opacity: 1;
    }
    span {
      width: 36px;
      height: 36px;
      overflow: visible;
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
