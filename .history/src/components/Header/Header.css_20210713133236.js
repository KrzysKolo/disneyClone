import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #090b13;
  color: #fff;
`;

export const Nav = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 0 36px;
  overflow-x: hidden;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 1.25rem;
  align-items: center;
  a {
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;
    align-items: center;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;
      &::after{
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transform: scaleX(0);
        transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

export const UserImage = styled.img`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
