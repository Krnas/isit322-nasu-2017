/**
 * Created by bcuser on 5/16/17.
 */
import React, {Component} from 'react';
import ElfLogger from '../../../server/routes/ElfLogger';
const logger = new ElfLogger('gist-lister');

class GistLister extends Component {
    constructor(props) {
        super(props);
        logger.log('Gist List Constructor');
    }

    render() {
        return (
            <div>
                <h2>Gist Lister</h2>
                <ul></ul>{this.props.gistList[0]['html_url']}<li></li>
                <li>foo</li>
                <li>foo</li>
                <button className='getGistList' onClick={this.fetchGistLists}>get GistList</button>
            </div>
        )
    }
}

export default GistLister;