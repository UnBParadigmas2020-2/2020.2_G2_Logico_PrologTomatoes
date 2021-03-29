import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

const PrologTomatoesOne: React.FC = () => {
  const [genderMovie, setGenderMovie] = useState('');

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
          Que gênero de filme
          <br />
          você quer assistir?
        </p>

        <Form>
          <Option>
            <input
              type="radio"
              id="Animation"
              name="gender"
              value="Animation"
              onClick={() => setGenderMovie('Animation')}
            />
            <label htmlFor="Animação">Animação</label>
          </Option>
        </Form>

        <button
          type="submit"
          onClick={() => history.push(`PrologTomatosThree/${genderMovie}`)}
        >
          Avançar
        </button>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesOne;
