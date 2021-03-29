import styled from 'styled-components';
import { shade } from 'polished';
import Four from '../../assets/Four.jpg';

export const Container = styled.div`
  /* Parte visível da tela */
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background: #322725;

  div {
    display: flex;
    justify-content: center;
    img {
      padding-left: 24px;
    }
  }

  h1 {
    font-size: 72px;
  }

  p {
    margin-top: 36px;
    font-size: 36px;
    margin-bottom: 40px;
  }

  button {
    background: #993559;
    height: 91px;
    /* Colocamos a bordinha que ficará vermelha */
    border: 0;
    padding: 0 16px;
    color: #322725;
    width: 310px;
    font-weight: bold;
    font-size: 36px;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#993559')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${Four}) no-repeat center;
  background-size: cover;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  label {
    margin-left: 16px;
  }
  input {
    cursor: pointer;
  }
  margin-bottom: 16px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
`;
