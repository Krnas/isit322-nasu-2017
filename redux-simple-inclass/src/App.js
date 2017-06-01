import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statement: 'No comment'
        };
        this.props.store.subscribe(() => {
            const storeState = this.props.store.getState();
            this.setState((prevState) => {
                return {statement: storeState.statement}
            });
        });
    }
    verifyStatement = () => {
        this.props.store.dispatch({ type: 'VERIFY' });
    };

    denyEverything = () => {
        this.props.store.dispatch({ type: 'DENY' });
    };

    noComment = () => {
        this.props.store.dispatch({ type: 'NO COMMENT' });
    };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <h1>Political Science Props Redux</h1>

          <p>This component does not use redux. It uses something redux-like.</p>
          {this.state.statement}
          <hr />
          <button onClick={this.verifyStatement}>Verify</button>
          <button onClick={this.denyEverything}>Deny</button>
          <button onClick={this.noComment}>No Comment</button>
      </div>
    );
  }
}

export default App;
