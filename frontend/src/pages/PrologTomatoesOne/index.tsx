import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

const PrologTomatoesOne: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>Prolog</h1>
          <img src={tomatoLogo} alt="Tomate" />
        </div>
        <h1>Tomatoes</h1>

        <p>
          Em dúvida sobre
          <br />
          qual filme assisitir <br />a gente te ajuda.
        </p>

        <button type="submit">Começar</button>
        <Link to="PrologTomatoesOne">Esqueci minha senha</Link>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesOne;
