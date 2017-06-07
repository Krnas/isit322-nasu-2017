import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gistReducer from './assets/gist-reducer';
let store = createStore(gistReducer);
ReactDOM.render(
    <div>
        <Provider store={store}>

                <DataMaven/>

        </Provider>
    </div>,
    document.getElementById('root'));
res.sendFile('index.html');
