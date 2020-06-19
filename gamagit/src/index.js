import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Repositories from './pages/Repositories';

ReactDOM.render( // "render" function renders JSX html code inside given element;
  <App title="Hello" user="Gama Academy"/>,
  document.getElementById('root') // given element used to render information inside to show on page;
);