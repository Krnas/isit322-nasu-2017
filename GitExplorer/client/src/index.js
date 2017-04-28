import React from 'react';
import ReactDOM from 'react-dom';
import GetFoo from './components/GetFoo';
import Header from './components/Header';
import SmallNumbers from './components/SmallNumbers';
import GetUserInfo from './components/GetUserInfo';
import './css/index.css';

ReactDOM.render(
    <div>
    <Header/>
  <GetFoo />
        <SmallNumbers/>
        <GetUserInfo/>
    </div>,
  document.getElementById('root')
);
