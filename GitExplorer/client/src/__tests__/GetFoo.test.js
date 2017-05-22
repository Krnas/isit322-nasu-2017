import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/GetFoo';
import {shallow} from 'enzyme';

describe('My rest basic test', function() {

    it('renders button click message', () => {
        const wrapper = shallow(<App />);
        const nineSign = <p className='App-intro'>state.foo</p>;
        wrapper.find('button.getFoo').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(false);

    });

});

