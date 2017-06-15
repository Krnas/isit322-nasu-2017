import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
//var fetch = require('../mocks').fetch;
import {connect} from 'react-redux';
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

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.foo: {this.props.foo}
                </p>
                <p className="App-intro">
                    state.file: {this.props.file}
                </p>

                <button className='getFoo' onClick={this.props.getFoo}>get Foo</button>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        foo:state.getFoo.foo,
        file: state.getFoo.file
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /*getBar: () => {
            dispatch({
                type: 'GETFOO',
                getFoo: {
                    foo: 'url-mock-bar',
                    file: 'url-mock-api.js'
                }
            });
        },*/
        getFoo: () => {
            fetch('/foo')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    dispatch({
            type: 'GETFOO',
            getFoo: json
        });
                }).catch(function(ex) {
            console.log('parsing failed', ex);
        });

        }
    };
};
GetFoo = connect(mapStateToProps, mapDispatchToProps)(GetFoo);

export default GetFoo;
