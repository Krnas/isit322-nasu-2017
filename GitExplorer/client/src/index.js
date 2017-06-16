import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from './components/DataMaven';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import gistReducer from './assets/gist-reducer';

const middlewares = [];

let store = createStore(gistReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    <div>
        <Provider store={store}>
            <Router>
                <DataMaven/>
            </Router>
        </Provider>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();