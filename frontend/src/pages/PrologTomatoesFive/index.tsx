import React, { useCallback, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container, Content, Background } from './styles';
import tomatoLogo from '../../assets/tomato.svg';
import api from '../../services/api';

interface MovieParams {
  gender: string;
  ageMovie: string;
  duration: string;
}

const PrologTomatoesFour: React.FC = () => {
  const { params } = useRouteMatch<MovieParams>();
  const history = useHistory();

  const handleMovie = useCallback(
    (length: string, age: string, genre: string): void | Error => {
      api({
        method: 'post',
        url: '/api/movie/',
        data: {
          length,
          age,
          genre,
        },
      });
    },
    []
  );

  return (
    <Container>
      <Content>
        <div>
          <h1>Seu </h1>
          <img src={tomatoLogo} alt="Tomate" />
        </div>
        <h1>Filme é ...</h1>

        <p>Bee Movie</p>

        <button
          type="submit"
          onClick={() =>
            handleMovie(params.duration, params.ageMovie, params.gender)
          }
        >
          Refazer
        </button>
      </Content>
      <Background />
    </Container>
  );
};

export default PrologTomatoesFour;
