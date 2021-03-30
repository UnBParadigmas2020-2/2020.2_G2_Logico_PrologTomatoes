import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

interface MovieParams {
  gender: string;
  ageMovie: string;
}

const PrologTomatoesFour: React.FC = () => {
  const [duration, setDuration] = useState('1');

  const { params } = useRouteMatch<MovieParams>();
  const history = useHistory();

  return (
    <Container>
      <Content>
        <div>
          <h1>Seu </h1>
          <img src={tomatoLogo} alt="Tomate" />
        </div>
        <h1>Filme é ...</h1>

        <p>Bee Movie</p>

        <button type="submit" onClick={() => history.push(`/`)}>
          Refazer
        </button>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesFour;
