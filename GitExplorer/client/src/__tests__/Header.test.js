import React from 'react';
import {mount} from 'enzyme';
import ElfHeader from '../components/ElfHeader';
import ElfDebug from '../ElfDebug';
var elfDebug = new ElfDebug(false, 'header-test');

describe('My header test', function () {

    it('renders without crashing', () => {
        const div= document.createElement('div');
        ReactDOM.render(<Router><ElfHeader/></Router>, div);
    });
    it('renders and reads H2 text', () => {
        const wrapper = mount(<Router><ElfHeader/></Router>);
        const welcome = <h2>Welcome to React</h2>;
        elfDebug.getAll(wrapper, 'h2');
        expect(wrapper.contains(welcome)).toEqual(true);

    });


});