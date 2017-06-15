import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';
import fieldDefinitions from '../field-definitions';
import ElfLogger from './ElfLogger';
const logger = new ElfLogger(false);
//var fetch = require('../mocks').fetch;

class GetUserInfo extends Component {
    // TODO: Pass props to both constructor and super
    constructor(props) {
        super(props);
        console.log(this.props);
        /*const tempGitUser = {};
        for (let field of fieldDefinitions) {
            tempGitUser[field.id] = field.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };*/

    }

    /*fetchUser = (event) => {

        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            }).then(function (json) {
            logger.log('parsed json', json);
            const gitUser = JSON.parse(json.body);
            that.setState({
                gitUser: gitUser
            });

            var body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function (ex) {
            logger.log('parsing failed', ex);
        });
        event.preventDefault();
    };*/

    render() {
        return (
            <div className="App">

                <ShowUserInfo
                    fields={this.props.fields}
                    gitUser={this.props.gitUser}
                    onChange={this.props.onChange}
                    />

            </div>
        );
    }
}

export default GetUserInfo;
