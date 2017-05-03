import React from 'react';

import {mount} from 'enzyme';
import GetUserInfo from '../components/GetUserInfo';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);

describe('My get user info test', function () {

    let getFirst = function(wrapper, element) {
        const paragraphData= wrapper.find(element).first().debug();
        console.log(paragraphData);

    };

    it.only('renders default login data', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">login-unknown</p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">asdf</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebug.getAll(wrapper, 'div');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });
});