/**
 * Created by bcuser on 6/1/17.
 */
import {connect} from 'react-redux';
import AppConnect from './AppConnect';
const mapStateToProps = (state) => {
    return {
        statement: state.statement,
        kind: state.kind
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        verifyStatement: () => {
            dispatch({type: 'VERIFY'});
        },

        denyEverything: () => {
            dispatch({type: 'DENY'});
        },
        noComment: () => {
            dispatch({type: 'NO COMMENT'});
        }
    }
};
const connector = connect(mapStateToProps, mapDispatchToProps)(AppConnect);
export default connector;