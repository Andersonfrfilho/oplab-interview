import styled, { keyframes } from 'styled-components';
import signUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;

  max-width: 700px;
`;
const appearFromRight = keyframes`
  from{
    opacity:0;
    transform:translateX(50px);
  }
  to{
    opacity:1;
    transform:translateX(0)
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 5px 40px;
  animation: ${appearFromRight} 1s;
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;
export const AreaIcon = styled.div`
  flex: 1;
  padding: 15px 50px;
  max-height: 190px;
  img {
    width: 56px;
    height: 56px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const AreaIcons = styled.div`
  flex: 1;
  max-height: 120px;
  img {
    height: 56px;
    & + img {
      margin-left: 15px;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
export const AreaText = styled.div`
  flex: 1;
  padding: 0px 50px;

  h1 {
    font-family: 'Muli', sans-serif;
    color: #6603c9;
    letter-spacing: 2px;
    text-transform: none;
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 2.2em;
  }
  h2 {
    font-family: 'Muli', sans-serif;
    color: #6603c9;
    letter-spacing: 1px;
    text-transform: none;
    font-weight: bold;
    margin-bottom: 14px;
    font-size: 18px;
  }
  h3 {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    color: #a1a1a1;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  p {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
    color: #a1a1a1;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
`;
export const AreaFooter = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  padding-left: 5px;
  padding-right: 55px;
  div {
    flex: 1;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
    a {
      text-decoration: none;
      color: #6603c9;
      & + a {
        margin-left: 25px;
      }
    }
  }
  p {
    color: #a1a1a1;
    font-family: serif sans-serif;
    margin-bottom: 15px;
  }
`;
