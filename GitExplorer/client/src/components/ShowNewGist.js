import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
//var fetch = require('../mocks').fetch;
import Logger from './ElfLogger';
const logger = new Logger('data-maven', 'blue', 'yellow', '24px');

class ShowNewGist extends Component {
    // TODO Pass props for fetchGists
    constructor(props) {
        super(props);
       logger.log('show new gist called');
    }

    debug = (message) => {
        if (!this.quiet) {
            console.log(message);
        }
    };

    render() {
        // TODO: It's this.props.fetchGists
        return (
            <div className="App">

                <p className="App-intro">
                    Url: {this.props.gitGist.url}
                </p>
                <p className="App-intro">
                    Description: {this.props.gitGist.description}
                </p>

                <button className='getFoo' onClick={this.props.fetchGist}>get Foo</button>

            </div>
        );
    }
}

export default ShowNewGist;
