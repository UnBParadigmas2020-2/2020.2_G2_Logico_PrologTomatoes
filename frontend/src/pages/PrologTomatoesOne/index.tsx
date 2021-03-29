import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

const PrologTomatoesOne: React.FC = () => {
  const history = useHistory();
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

        <button
          type="submit"
          onClick={() => history.push('/prolog-tomatoes-two')}
        >
          Começar
        </button>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesOne;
