/**
 * Created by bcuser on 6/13/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import DataMaven from '../components/DataMaven';
import { MemoryRouter } from 'react-router';
import GetFoo from '../components/GetFoo';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import gistReducer from '/gist-reducer';
import ElfDebugEnzyme from '/ElfDebug';
const elfDebug = new ElfDebugEnzyme(false, 'GetFoo.test.js');

jest.mock('whatwg-fetch');

describe('My GetFoo Tests', function() {

    let wrapper;
    let store;

    beforeEach(function() {
        store = createStore(gistReducer);
    });

    beforeEach(function() {
        wrapper = mount(
            <div>
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/get-foo']}>
                        <DataMaven />
                    </MemoryRouter>
                </Provider>
            </div>
        );
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<GetFoo />, div);
    });

    it('renders default message for getFoo', () => {
        const nineSign = <p className='App-intro'>state.foo: foo</p>;
        elfDebug.getIndex(wrapper, 'div#GetFoo', 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for getFoo', () => {
        const nineSign = <p className='App-intro'>state.foo: url-mock-bar</p>;
        wrapper.find('button#getFoo').simulate('click');
        //elfDebug.getAll(wrapper, true);
        elfDebug.getIndex(wrapper, 'div#GetFoo', 1, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });

    it('renders button click message for getFoo file', () => {
        const nineSign = <p className='App-intro'>state.file: url-mock-api.js</p>;
        wrapper.find('button#getFoo').simulate('click');
        elfDebug.getIndex(wrapper, 'div#GetFoo', 2, true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
