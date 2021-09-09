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
    border-radious: 20px;
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
  opacity: 0.5;
  padding-left: 12px;
  transition: 0.3s;
  :hover {
    opacity: 1;
  }
`;
