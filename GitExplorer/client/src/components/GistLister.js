/**
 * Created by bcuser on 5/16/17.
 */
import React, {Component} from 'react';
import ElfLogger from './ElfLogger';
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
                <ul></ul>

            </div>
        )
    }
}

export default GistLister;