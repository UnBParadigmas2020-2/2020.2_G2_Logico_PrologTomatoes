import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

interface MovieParams {
  gender: string;
  ageMovie: string;
}

const PrologTomatoesFive: React.FC = () => {
  const [duration, setDuration] = useState('1');

  const { params } = useRouteMatch<MovieParams>();
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
          Você prefere filmes
          <br />
          curtos, médios
          <br />
          ou longos?
        </p>

        <Form>
          <Option>
            <input
              type="radio"
              id="Curto"
              name="duration"
              value="Curto"
              onClick={() => setDuration('1')}
              defaultChecked
            />
            <label htmlFor="Curto">Curto</label>
          </Option>

          <Option>
            <input
              type="radio"
              id="2"
              name="age"
              value="2"
              onClick={() => setDuration('2')}
            />
            <label htmlFor="Médio">Médio</label>
          </Option>

          <Option>
            <input
              type="radio"
              id="Longo"
              name="duration"
              value="3"
              onClick={() => setDuration('3')}
            />
            <label htmlFor="Longo">Longo</label>
          </Option>
        </Form>

        <button
          type="submit"
          onClick={() =>
            history.push(
              `prolog-tomatoes-five/${params.gender}/${params.ageMovie}/${duration}`
            )
          }
        >
          Avançar
        </button>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesFive;
