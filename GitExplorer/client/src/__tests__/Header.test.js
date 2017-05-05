import React from 'react';
import {shallow} from 'enzyme';
import ElfHeader from '../components/ElfHeader';


describe('My header test', function () {

    it('renders without crashing', () => {
        const div= document.createElement('div');
        const wrapper = shallow(<ElfHeader/>);
        expect(wrapper.contains(wrapper)).toEqual(true);
    });
    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader/>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });


});