import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FakeRedux from './FakeRedux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import spokesman from './spokesman';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AppNoProps from './AppNoProps';
import AppConnect from './AppConnect';
import Connector from './Connector';
import DispatchConnect from './DispatchConnect';


let store = createStore(spokesman)
ReactDOM.render(
   <div>
        <Provider store={store}>
        <div>
            <App store={store}/>
            <hr/><hr/>
            <AppNoProps/>
            <hr/><hr/>
            <DispatchConnect/>
            <hr/><hr/>
            <AppConnect/>
            <Connector/>
            <hr/><hr/>
            <FakeRedux/>
        </div>
        </Provider>
   </div>,

    document.getElementById('root'));
registerServiceWorker();
