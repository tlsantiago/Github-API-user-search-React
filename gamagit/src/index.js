import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( // "render" function renders JSX html code inside given element;
  <App title="Hello" user="Gama Academy"/>,
  document.getElementById('root') // given element used to render information inside to show on page;
);

serviceWorker.unregister();
