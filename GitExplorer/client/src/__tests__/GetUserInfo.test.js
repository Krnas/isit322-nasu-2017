import React from 'react';
import {mount} from 'enzyme';
import GetUserInfo from '../components/GetUserInfo';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);

describe('My get user info test', function () {
    const showData = false;

    // let getFirst = function(wrapper, element) {
    //     const paragraphData= wrapper.find(element).first().debug();
    //     console.log(paragraphData);
    //
    // };
    function getDefault(id, value) {
        it('renders default login data', () => {
            const wrapper = mount(<GetUserInfo />);
            const nineSign = <p className="ElfFormParagraph" id={id}>{value}</p>;
            elfDebug.getFirst(wrapper, 'p');
            expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

        });
    }

    it('renders default login data', () => {
        getDefault('login', 'login-unknown');
    });

    it('renders button click message', () => {
        const wrapper = mount(<GetUserInfo />);
        const nineSign = <p className="ElfFormParagraph">Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebug.getIndex(wrapper, 1);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    it('renders default login data', () => {
        getDefault('avatar_url', 'aiunknown');
    });
});