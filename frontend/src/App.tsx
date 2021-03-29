import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrologTomatoesOne from './pages/PrologTomatoesOne';
import PrologTomatoesTwo from './pages/PrologTomatoesTwo';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={PrologTomatoesOne} />
    <Route path="/prolog-tomatoes-two" exact component={PrologTomatoesTwo} />
    <GlobalStyle />
  </Router>
);

export default App;
