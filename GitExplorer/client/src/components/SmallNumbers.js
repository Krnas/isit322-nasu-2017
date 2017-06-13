/**
 * Created by charlie on 4/15/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import ElfLogger from '../assets/ElfLogger';
const logger = new ElfLogger('small-numbers');

class SmallNumbers extends Component {
    constructor(props) {
        super(props);
        logger.log('SmallNumber props', this.props);
        this.getNine = this.getNine.bind(this);
        this.getEight = this.getEight.bind(this);
    }

    getNine() {
        this.props.dispatch({type: 'NUMBER_NINE'});
    };

    getEight() {
        this.props.dispatch({type: 'NUMBER_EIGHT'});
    };

    render() {
        return (
            <div id='smallNumbers' className='App'>

                <p className='App-intro'>
                    state.eight: {this.props.numbers.eight}
                </p>

                <p className='App-intro'>
                    state.nine: {this.props.numbers.nine}
                </p>

                <button id='getEight' onClick={this.getEight}>Get Eight</button>
                <button id='getNine' onClick={this.getNine}>Get Nine</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        numbers: state.numbers
    };
};

SmallNumbers = connect(mapStateToProps)(SmallNumbers);
export default SmallNumbers;
