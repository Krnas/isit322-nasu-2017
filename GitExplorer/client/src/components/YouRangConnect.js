/**
 * Created by bcuser on 6/16/17.
 */

import 'whatwg-fetch';
import {connect} from 'react-redux';
import YouRang from './YouRang';
import ElfLogger from '../assets/ElfLogger';
const logger = new ElfLogger('get-foo-connect');

const mapStateToProps = (state) => {
    return {
        result: state.youRang.result,
        message: state.youRang.message
    };
};

const getServer = (url, dispatch) => {
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
        dispatch({
            type: 'YOU-RANG',
            youRang: json
        });
    }).catch(function(ex) {
        console.log('parsing failed', ex);
    });

};

const mapDispatchToProps = (dispatch) => {
    return {

        getMainServer: () => {
            getServer('/you-rang', dispatch);
        },

        getMicroFirst: () => {
            getServer('/micro-first/you-rang', dispatch);
        },

        getMicroSecond: () => {
            getServer('/micro-second/you-rang', dispatch);
        }
    };
};

const YouRangConnect = connect(mapStateToProps, mapDispatchToProps)(YouRang);

export default YouRangConnect;
