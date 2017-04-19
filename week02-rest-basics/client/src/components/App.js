import React, {Component} from 'react';

import '../App.css';
import 'whatwg-fetch';
//var fetch = require('../mocks').fetch;

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for express server'
        };
    }

    getFoo = () => {
        //this.setState({foo: )23'});
        const that = this;
        fetch('/api/foo')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            console.log('parsed json', json);
            that.setState(foo => (json));
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.foo: {this.state.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.state.file}
                </p>

                <button className='getFoo' onClick={this.getFoo}>get Foo</button>

            </div>
        );
    }
}

export default App;
