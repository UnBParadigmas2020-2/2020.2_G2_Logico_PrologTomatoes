import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

interface MovieParams {
  gender: string;
}

const PrologTomatoesThree: React.FC = () => {
  const [ageMovie, setAgeMovie] = useState('1');

  const { params } = useRouteMatch<MovieParams>();
  const history = useHistory();
  return (
    <Container>
      <Background />
      <Content>
        <div>
          <h1>Prolog</h1>
          <img src={tomatoLogo} alt="Tomate" />
        </div>
        <h1>Tomatoes</h1>

        <p>
          Você prefere filmes
          <br />
          novos ou antigos?
        </p>

        <Form>
          <Option>
            <input
              type="radio"
              id="1"
              name="age"
              value="1"
              defaultChecked
              onClick={() => setAgeMovie('1')}
            />
            <label htmlFor="Animação">Novos</label>
          </Option>

          <Option>
            <input
              type="radio"
              id="2"
              name="age"
              value="2"
              onClick={() => setAgeMovie('2')}
            />
            <label htmlFor="Animação">Antigos</label>
          </Option>
        </Form>

        <button
          type="submit"
          onClick={() =>
            history.push(`prolog-tomatoes-four/${params.gender}/${ageMovie}`)
          }
        >
          Avançar
        </button>
      </Content>
    </Container>
  );
};

export default PrologTomatoesThree;
