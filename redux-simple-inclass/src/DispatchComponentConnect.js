/**
 * Created by bcuser on 6/6/17.
 */
import React from 'react';

import './App.css';
import {connect} from 'react-redux';


//class AppConnect extends Component {
class DispatchComponentConnect extends Component {


    verifyStatement = () => {
        this.props.dispatch({type: 'VERIFY'});
    };

    denyEverything = () => {
        this.props.dispatch({type: 'DENY'});
    };

    noComment = () => {
        this.props.dispatch({type: 'NO COMMENT'});
    };
}
return (

    <div className="App">
        <div className="App-intro">
            <h2>welcome to react</h2>
        </div>

        <h1>Political Science Dispatch Component Connect</h1>

        <p>This component does not use redux. It uses something redux-like.</p>
        <p>{statement}</p>
        <p>{kind}</p>
        <hr />
        <button onClick={verifyStatement}>Verify</button>
        <button onClick={denyEverything}>Deny</button>
        <button onClick={noComment}>No Comment</button>
    </div>
);

const mapStateToProps = (state) => {
    return {
        statement: state.statement,
        kind: state.kind
    }
};

DispatchComponentConnect = connect(mapStateToProps)(DispatchComponentConnect);
export default DispatchComponentConnect;