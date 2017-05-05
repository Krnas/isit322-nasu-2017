import React from 'react';

import {mount} from 'enzyme';
import ShowUserInfo from '../components/ShowUserInfo';
import fieldDefinitions from '../field-definitions';
const elfDebug = new ElfDebug(true);

describe('My get user info test', function () {
    let gitUser = {};
    beforeEach(function() {
        gitUser = {
            login: 'login',
            avatar_url: 'avatar'
        }
    });

    let getFirst = function(wrapper, element) {
        const paragraphData= wrapper.find(element).first().debug();
        console.log(paragraphData);

    };

    it.only('renders default login data', () => {
        const wrapper = mount(<ShowUserInfo
        field ={fieldDefinitions}
        gitUser = {gitUser}
        onChange= {function() {}} />);
        const nineSign = <p className="ElfFormParagraph">login: login</p>;
        elfDebug.getFirst(wrapper, 'div');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

});

