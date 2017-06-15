import React, {Component} from 'react';

import '../css/App.css';
import {connect} from 'react-redux';

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
            <div className='App'>

                <p className='App-intro'>
                    state.nine: {this.props.numbers.nine}
                </p>

                <p className='App-intro'>
                    state.eight: {this.props.numbers.eight}
                </p>

                <button className='getNine' onClick={this.getNine}>Get Nine</button>
                <button className='getEight' onClick={this.getEight}>Get Eight</button>
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
