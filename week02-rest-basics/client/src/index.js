import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import './index.css';

ReactDOM.render(
    <div>
    <Header/>
  <App />
        <SmallNumbers/>
    </div>,
  document.getElementById('root')
);
