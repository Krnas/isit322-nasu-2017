import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/Header';


describe('My header test', function () {

    it('renders without crashing', () => {
        const div= document.createElement()
    })
    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header/>);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });


});