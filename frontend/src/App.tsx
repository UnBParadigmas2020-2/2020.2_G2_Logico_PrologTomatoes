import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrologTomatoesOne from './pages/PrologTomatoesOne';
import PrologTomatoesTwo from './pages/PrologTomatoesTwo';
import PrologTomatoesThree from './pages/PrologTomatoesThree';
import PrologTomatoesFour from './pages/PrologTomatoesFour';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={PrologTomatoesOne} />
    <Route path="/prolog-tomatoes-two" exact component={PrologTomatoesTwo} />
    <Route
      path="/prolog-tomatoes-three/:gender"
      exact
      component={PrologTomatoesThree}
    />
    <Route
      path="/prolog-tomatoes-three/prolog-tomatoes-four/:gender/:ageMovie"
      exact
      component={PrologTomatoesFour}
    />
    <GlobalStyle />
  </Router>
);

export default App;
