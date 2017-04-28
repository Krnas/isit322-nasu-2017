import React from 'react';

import {mount} from 'enzyme';
import GetUserInfo from '../components/GetUserInfo';


describe('My get user info test', function () {

    let getFirst = function(wrapper, element) {
        const paragraphData= wrapper.find(element).first().debug();
        console.log(paragraphData);

    };

    it.only('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: asdf</p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="App-intro">login: asdf</p>;
        wrapper.find('button#getUser').simulate('click');
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });
});