import React, {Component} from 'react';

import '../css/App.css';
import {connect} from 'react-redux';

class SmallNumbers extends Component {
    constructor() {
        super();
        this.state = {
            nine: '0',
            eight: '0'
        };
        /*constructor(props) {
         super(props);
         this.state = {
         nine: this.props.numbers.nine,
         eight: this.props.numbers.eight
         };*/
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
