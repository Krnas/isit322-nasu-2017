/**
 * Created by bcuser on 6/1/17.
 */
import React, { Component } from 'react';
import spokesman from './spokesman';

class FakeRedux extends Component {
    /*constructor() {
     super();
     this.
     }*/
    state = spokesman(undefined, {});

    dispatch(action) {
        this.setState( (prevState) => spokesman(prevState, action));
    }

    render() {
        return (
            <div>
                <h1>Political Science Fake Redux</h1>

                <p>This component does not use redux. It uses something redux-like.</p>
                {this.state.statement}
                <hr />
                <button onClick={this.verifyStatement}>Verify</button>
                <button onClick={this.denyEverything}>Deny</button>
                <button onClick={this.noComment}>No Comment</button>
            </div>
        )
    }
}

export default FakeRedux;