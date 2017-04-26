import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/GetFoo';
import {shallow} from 'enzyme';
import GetUserInfo from '../components/GetUserInfo';


describe('My get user info test', function () {

    let getFirst = function(wrapper, element) {
        const ninep= wrapper.find(element).first().debug();
        console.log(ninep);

    };

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login:</p>;
        wrapper.find('button.getUser').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it('renders button click message', () => {
        const wrapper = shallow(<GetUserInfo />);
        const nineSign = <p className="App-intro">login:</p>;
        wrapper.find('button.getUser').simulate('click');
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
        expect(wrapper.contains(nineSign)).toEqual(true);

    });
});