import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Content, Background, Option, Form } from './styles';
import tomatoLogo from '../../assets/tomato.svg';

const PrologTomatoesTwo: React.FC = () => {
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

          <Option>
            <input
              onClick={() => setGenderMovie('Drama')}
              type="radio"
              id="Drama"
              name="gender"
              value="Drama"
            />
            <label htmlFor="Drama">Drama</label>
          </Option>

          <Option>
            <input
              onClick={() => setGenderMovie('Horror')}
              type="radio"
              id="Horror"
              name="gender"
              value="Horror"
            />
            <label htmlFor="Horror">Terror</label>
          </Option>

          <Option>
            <input
              onClick={() => setGenderMovie('Thriller')}
              type="radio"
              id="Thriller"
              name="gender"
              value="Thriller"
            />
            <label htmlFor="Thriller">Thriller</label>
          </Option>

          <Option>
            <input
              onClick={() => setGenderMovie('Comedy')}
              type="radio"
              id="Comedy"
              name="gender"
              value="Comedy"
            />
            <label htmlFor="Comedy">Comédia</label>
          </Option>

          <Option>
            <input
              onClick={() => setGenderMovie('Romance')}
              type="radio"
              id="Romance"
              name="gender"
              value="Romance"
            />
            <label htmlFor="Romance">Romance</label>
          </Option>

          <Option>
            <input
              onClick={() => setGenderMovie('Action')}
              type="radio"
              id="Action"
              name="gender"
              value="Action"
            />
            <label htmlFor="Action">Ação</label>
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

export default PrologTomatoesTwo;
