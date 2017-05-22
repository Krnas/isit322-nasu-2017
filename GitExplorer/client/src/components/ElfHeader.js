import React, {Component} from 'react';

import logo from '../images/25452.svg';
import {

    Link
} from 'react-router-dom'
import '../css/App.css';

class ElfHeader extends Component {

    render() {
        return (

                    <div className="App">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/get-foo">BarFoo</Link></li>
                            <li><Link to="/get-numbers">Numbers</Link></li>
                            <li><Link to="/show-new-gist">Create Gist</Link></li>
                            <li><Link to='/get-gist-lists'>GetGist List</Link></li>
                        </ul>
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <h2>Welcome to React</h2>
                        </div>
                    </div>


        );
    }
}

export default ElfHeader;