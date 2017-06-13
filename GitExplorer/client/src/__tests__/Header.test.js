import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import {mount} from 'enzyme';
import ElfDebug from '/ElfDebug';
const elfDebug = new ElfDebug(false, 'header test');
import { BrowserRouter as Router } from 'react-router-dom';
import ElfLogger from '../assets/ElfLogger';
const elfLogger = new ElfLogger('header-test');

describe('My Header tests', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Router><ElfHeader /></Router>, div);
    });

    it('renders without crashing', () => {
        const wrapper = <Router><ElfHeader /></Router>;
        const div = document.createElement('div');
        ReactDOM.render(wrapper, div);

    });

    it('renders and reads H2 text', () => {
        const wrapper = mount(<Router><ElfHeader /></Router>);
        const welcome = <h2>Welcome to React</h2>;
        elfLogger.log('H2a');
        elfEnzymeDebug.getElement(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);

        //elfEnzymeDebug.getFirst(wrapper, 'h2');
    });

});
