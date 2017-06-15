/**
 * Created by bcuser on 6/14/17.
 */
import 'whatwg-fetch';
import {connect} from 'react-redux';
import GetFoo from './GetFoo';
import ElfLogger from '../assets/ElfLogger';
const logger = new ElfLogger('get-foo-connect');

const mapStateToProps = (state) => {
    return {
        foo: state.getFoo.foo,
        file: state.getFoo.file
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBar: () => {
            dispatch({
                type: 'GETFOO',
                getFoo: {
                    foo: 'url-mock-bar',
                    file: 'url-mock-api.js'
                }
            });
        },
        getFoo: () => {
            fetch('/foo')
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                dispatch({
                    type: 'GETFOO',
                    getFoo: json
                });
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });

        }
    };
};

const GetFooConnect = connect(mapStateToProps, mapDispatchToProps)(GetFoo);

export default GetFooConnect;