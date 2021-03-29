import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

interface MovieParams {
  gender: string;
  ageMovie: string;
}

const PrologTomatoesFour: React.FC = () => {
  const [duration, setDuration] = useState('Curto');

  const { params } = useRouteMatch<MovieParams>();
  const history = useHistory();

  return (
    <Container>
      <Content>
        <h1>{params.gender}</h1>
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
              id=""
              name="duration"
              value="Curto"
              onClick={() => setDuration('Curto')}
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
              onClick={() => setDuration('Médio')}
            />
            <label htmlFor="Médio">Médio</label>
          </Option>

          <Option>
            <input
              type="radio"
              id="Longo"
              name="duration"
              value="Longo"
              onClick={() => setDuration('Longo')}
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

export default PrologTomatoesFour;
