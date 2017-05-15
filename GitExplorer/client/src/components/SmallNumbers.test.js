/**
 * Created by bcuser on 5/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SmallNumbers from '../components/SmallNumbers';

describe('My rest basic test', function () {

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };
    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };
    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers/>);
        const nineSign = <p className="App-intro">state.nine: 0</p>;
        getFirst(wrapper);
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it('renders button click message for nine', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className="App-intro">state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<SmallNumbers />);
        const eightSign = <p className="App-intro">state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        console.log(eightp);
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

});