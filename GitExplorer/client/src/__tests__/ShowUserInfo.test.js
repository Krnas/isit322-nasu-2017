import React from 'react';

import {shallow} from 'enzyme';
import ShowUserInfo from '../components/ShowUserInfo';


describe('My get user info test', function () {
    let gitUser = {};
    beforeEach(function() {
        gitUser = {
            login: 'login',
            avarar_url: 'avatar'
        }
    });

    let getFirst = function(wrapper, element) {
        const paragraphData= wrapper.find(element).first().debug();
        console.log(paragraphData);

    };

    it('renders default login data', () => {
        const wrapper = shallow(<ShowUserInfo
        gitUser = {gitUser}
        onChange= {function() {}} />);
        const nineSign = <p className="App-intro">login: login</p>;
        getFirst(wrapper, 'p');
        expect(wrapper.contains(nineSign)).toEqual(true);

    });

});