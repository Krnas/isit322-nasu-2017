/**
 * Created by bcuser on 6/1/17.
 */
import React from 'react';

import './App.css';
import {connect} from 'react-redux';


//class AppConnect extends Component {
let AppConnect = ({dispatch, statement, kind, verifyStatement, denyEverything, noComment}) => {

    return (
        <div className="App">
            <div className="App-intro">
                <h2>welcome to react</h2>
            </div>

            <h1>Political Science Dispatch Connect</h1>

            <p>This component does not use redux. It uses something redux-like.</p>
            <p>{statement}</p>
            <p>{kind}</p>
            <hr />
            <button onClick={verifyStatement}>Verify</button>
            <button onClick={denyEverything}>Deny</button>
            <button onClick={noComment}>No Comment</button>
        </div>
    );

};

AppConnect = connect(mapStateToProps, mapDispatchToProps)(AppConnect);
export default AppConnect;