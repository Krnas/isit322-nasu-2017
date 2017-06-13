/**
 * Created by bcuser on 5/9/17.
 */

import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import 'whatwg-fetch';
import YouRangConnect from './YouRangConnect';
import ElfHeader from './ElfHeader';
import Debug from '../assets/ElfLogger';
const logger = new Debug('data-maven');

class DataMaven extends Component {

    render() {
        logger.log('DATA MAVEN RENDER');
        return (

            <div className='container'>
                <ElfHeader/>
                <Route exact path='/' component={YouRangConnect}/>
            </div>
        );
    }
}

export default DataMaven;


