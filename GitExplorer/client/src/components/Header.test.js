/**
 * Created by bcuser on 5/9/17.
 */
import React from 'react';
import {shallow} from 'enzyme';
import ElfHeader from '../components/ElfHeader';


describe('My header test', function () {

    it('renders without crashing', () => {
        const div= document.createElement('div');
        const wrapper = shallow(<ElfHeader/>);
        expect(wrapper.containsMatchingElement(wrapper)).toEqual(true);
    });
    it('renders and reads H2 text', () => {
        const wrapper = shallow(<ElfHeader/>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });


});