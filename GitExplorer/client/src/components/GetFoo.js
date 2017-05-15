import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
//var fetch = require('../mocks').fetch;

class GetFoo extends Component {
    constructor() {
        super();
        this.state = {
            file: 'Get Nine Result will be placed here.',
            foo: 'waiting for express server'
        };
        this.quiet = true;
        this.debug('GetFoo constructor called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    getFoo = () => {
        const that = this;
        fetch('/api/foo')
            .then(function (response) {

                return response.json();
            }).then(function (json) {
            console.log(json);
            //const foobar = JSON.parse(json);
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

                <button className='getFoo' onClick={this.props.fetchGist}>get Foo</button>

            </div>
        );
    }
}

export default GetFoo;
