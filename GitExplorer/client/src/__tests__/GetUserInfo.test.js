import React from 'react';
import {mount} from 'enzyme';
import DataMaven from '../components/DataMaven';
import ElfDebug from '../ElfDebug';
const elfDebug = new ElfDebug(false);

describe('My get user info test', function () {
    //const showData = false;

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DataMaven />, div);
    });

    it('renders default message for state.userLogin', () => {
        const wrapper = mount(<DataMaven/>);
        const inputElement = <import value="login-unknown"/>;
        elfShow.getFirst(wrapper, 'input');
        expect(wrapper.containtsMatchingElement(inputElement)).toEqual(true);
    });
    function getDefault(id, value) {
        it('renders default login data', () => {
            const wrapper = mount(<DataMaven />);
            const nineSign = <p className="ElfFormParagraph" id={id}>{value}</p>;
            elfDebug.getFirst(wrapper, 'p');
            expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

        });
    }


    it('renders default login data', () => {
        getDefault('login', 'login-unknown');
    });

    it('renders button click message', () => {
        const wrapper = mount(<DataMaven />);
        const nineSign = <p className="ElfFormParagraph">Robin Dudette</p>;
        wrapper.find('button#getUser').simulate('click');
        elfDebug.getIndex(wrapper, 1);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    it('renders default login data', () => {
        getDefault('avatar_url', 'aiunknown');
    });
});