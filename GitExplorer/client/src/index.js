import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/GetFoo';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import './css/index.css';

ReactDOM.render(
    <div>
    <Header/>
  <App />
        <SmallNumbers/>
    </div>,
  document.getElementById('root')
);
