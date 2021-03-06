import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
import ShowUserInfo from './ShowUserInfo';
import fieldDefinitions from '../../../git-convert/field-definitions';
//var fetch = require('../mocks').fetch;

class GetUserInfo extends Component {
    constructor() {
        super();
        /*const tempGitUser = {};
        for (let field of fieldDefinitions) {
            tempGitUser[field.id] = field.sample;
        }
        this.state = {
            gitUser: tempGitUser
        };*/

    }
/*
    fetchUser = (event) => {

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
                    fields={fieldDefinitions}
                    gitUser={this.state.gitUser}
                    onChange={this.fetchUser}
                    />

            </div>
        );
    }
}

export default GetUserInfo;
