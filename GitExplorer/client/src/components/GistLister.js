/**
 * Created by bcuser on 5/16/17.
 */
import React, {Component} from 'react';
import ElfLogger from '../../../server/routes/ElfLogger';
import {Button} from 'react-bootstrap';
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');
        this.state = {
            index: 0
        };
        this.gistIterator = this.gistIterator.bind(this);
    }

    gistIterator(event) {
        logger.log(event.target.id);
        if (event.target.id === 'nextGist') {
            this.setState((prevState, props) => {
                if (prevState.index < props.gistList.length - 1) {
                    return {index: prevState.index + 1}
                }

            });
        } else {
            this.setState((prevState, props) => {
                return {index: prevState.index - 1};
            });
        }
    }

    render() {
        return (
            <div className="App">
                <h2>Gist Lister</h2>

                <Button bsStyle='info' id='gistList' onClick={this.props.fetchGistLists}
                        disabled={this.props.gistCanIterate}>Get GistList</Button>
                <Button bsStyle='primary' id='prevGist' onClick={this.gistIterator} disabled={!this.props.gistIterator}>Prev
                    Gist</Button>
                <Button bsStyle='success' id='nextGist' onClick={this.gistIterator}
                        disabled={!this.props.gistCanIterate}>Next Gist</Button>

                <ul className="elf-ul">

                    <li>Index: {this.state.index} / {this.props.gistList.length - 1}</li>
                    <li>{this.props.gistList[this.state.index].description}</li>

                    <li>{this.props.gistList[this.state.index].htmlUrl}</li>
                    <li>{this.props.gistList[this.state.index].id}</li>
                    <li>{this.props.gistList[this.state.index].ownerLogin}</li>

                </ul>
                <img className='elfImage' alt='avatar' src={this.props.gistList[0].avatarUrl}/>

            </div>
    )
    }
    }
    export default GistLister;
/*
 <li><a target='_new' href={this.props.gistList[this.state.index].htmlUrl > {this.props.gistList}}
 </li>
 */