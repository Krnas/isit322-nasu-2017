
/**
 * Created by bcuser on 6/13/17.
 */
/**
 * Created by charlie on 4/15/17.
 */

import React, {Component} from 'react';
import '../css/App.css';
import ElfLogger from '../assets/ElfLogger';
const logger = new ElfLogger('get-server');

class YouRang extends Component {
    constructor() {
        super();
        this.state = {
            result: 'The Result',
            message: 'The Message'
        };
        logger.log('GetFoo constructor called');
    }

    render() {
        return (
            <div id="GetYouRang" className='App'>

                <p className='App-intro'>
                    <strong>Result</strong>: {this.props.result}
                </p>
                <p className='App-intro'>
                    <strong>Message</strong>: {this.props.message}
                </p>

                <button id='getMainServer' onClick={this.props.getMainServer}>Get Main Server</button>
                <button id='getMicroFirst' onClick={this.props.getMicroFirst}>Get MicroFirst</button>
                <button id='getMicroSecond' onClick={this.props.getMicroSecond}>Get MicroSecond</button>
            </div>
        );
    }
}

export default YouRang;

