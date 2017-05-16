import React, {Component} from 'react';

import '../css/App.css';
import 'whatwg-fetch';
import GetUserInfo from './GetUserInfo';
import ElfHeader from './ElfHeader';
import Logger from './ElfLogger';
import SmallNumbers from './SmallNumbers';
import GetFoo from './GetFoo';
import ShowNewGist from './ShowNewGist';
import numbersInit from '../numbers-data';
import fieldDefinitions from '../../../git-convert/field-definitions';
const logger = new Logger('show-new-gist', 'blue', 'yellow', '24px');
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
class DataMaven extends Component {
    constructor() {
        super();
        const tempGitUser = {};
        for (let field of fieldDefinitions) {
            tempGitUser[field.id] = field.sample;
        }
        this.state = {
            gitUser: tempGitUser,
            getGist: {
                url: 'url-qux',
                description: 'description-qux'
            }

        };
        this.getUser = this.getUser.bind(this);
        this.fetchGist = this.fetchGist.bind(this);
        logger.log('GetUserInfo constructor called');
    };

}

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
};


fetchGist = (event) => {
    logger.log('fetch gist called');
    const that = this;
    fetch('/api/gist-test')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
        const gitGist = json.result;
        that.setState({
            gitUser: gitGist
        });
        /*var body = JSON.parse(json.body);
         that.setState({gitUser: body});*/
    }).catch(function (ex) {
        logger.log('parsing failed', ex);
    });
    event.preventDefault();
};


render()
{
    logger.log('DATA MAVEN RENDER');
    return (

        <Router>
            <div>
                <ElfHeader/>
                <Route exact path='/'
                       render={(props) => (
                           <GetUserInfo {...props}
                                        fields={fieldDefinitions}
                                        gitUser={this.state.gitUser}
                                        onChange={this.fetchUser}/>
                       )}
                />
                <Route path='/get-foo' component={GetFoo}/>
                <Route path='/show-new-gist'
                       render={(props) => (
                           <ShowNewGist {...props}
                                        gitGist={this.state.gitGist}
                                        fetchGist={this.fetchGist}
                           />
                       )}
                />
                <Route path='/get-numbers'
                       render={(props) => (
                           <SmallNumbers {...props}
                                         numbers={numbersInit}/>
                       )}
                />
            </div>

        </Router>
    );
}


export default DataMaven;
