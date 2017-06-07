import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import GetUserInfo from './GetUserInfo';
import ElfHeader from './ElfHeader';
import Logger from '../../../server/routes/ElfLogger';
import SmallNumbers from './SmallNumbers';
import GetFoo from './GetFoo';
import GistLister from './GistLister';
import ShowNewGist from './ShowNewGist';

import fieldDefinitions from '../field-definitions';
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
                url: 'url',
                description: 'description'
            },
            gistCanIterate: false,
            gistList: [{'htmlUrl': 'foo'}]

        };

        //this.getUser = this.getUser.bind(this);
        //this.fetchGist = this.fetchGist.bind(this);
        logger.log('GetUserInfo constructor called');
    };


    fetchUser = (event) => {

        const that = this;
        fetch('/api/users')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            logger.log('parsed json', json);
            const gitUser = json.body;
            that.setState({
                gitUser: gitUser
            });

            var body = JSON.parse(json.body);
            that.setState({gitUser: body});
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
        event.preventDefault();
    };


    fetchGist = (event) => {
        logger.log('fetch gist called');
        const that = this;
        fetch('/api/gist-test')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            const gitGist = json.result;
            that.setState({
                gitUser: gitGist
            });
            /*var body = JSON.parse(json.body);
             that.setState({gitUser: body});*/
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
    };

    fetchGistLists = (event) => {

        const that = this;
        fetch('/gitapi/gists/get-basic-list')
            .then(function(response) {
                return response.json();
            }).then(function(json) {
            const gistList = json.result;
            that.setState({
                gitList: gistList
            });
            /*var body = JSON.parse(json.body);
             that.setState({gitUser: body});*/
        }).catch(function(ex) {
            logger.log('parsing failed', ex);
        });
        event.preventDefault();
    };

    gistDelete(param, callback) {
        const url='/gitapi/gists/delete?gistId=' + param;
        return fetch(url)
            .then((res) => res.json())
            .then((json) => console.log(json));
            console.log(json);
        callback(json);
    };
    render() {
        logger.log('DATA MAVEN RENDER');

        return (
                <div className="container">
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
                    <Route path='/get-gist-lists'
                           render={(props) => (
                               <GistLister {...props}
                                           gistCanIterate={this.state.gistCanIterate}
                                           gistList={this.state.gistList}
                                           fetchGistList={this.fetchGistLists}
                               />
                           )}
                    />
                    <Route path='/get-numbers' component={SmallNumbers} />

                           )}
                    />
                </div>

        )
    }

}
export default DataMaven;
/*<Route path='/get-numbers'
 render={(props) => (
 <SmallNumbers {...props}
 numbers={numbersInit}
 />*/

