import React, {Component} from 'react';

import '../css/App.css';


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

    getNine = () => {
        this.setState({nine: '9'});
    };

    getEight = () => {
        this.setState({eight: '8'});
    };

    render() {
        return (
            <div className="App">

                <p className="App-intro">
                    state.nine: {this.state.nine}
                </p>

                <p className="App-intro">
                    state.eight: {this.state.eight}
                </p>

                <button className="getNine" onClick={this.getNine}>Get Nine</button>
                <button className="getEight" onClick={this.getEight}>Get Eight</button>
            </div>
        );
    }
}

export default SmallNumbers;
