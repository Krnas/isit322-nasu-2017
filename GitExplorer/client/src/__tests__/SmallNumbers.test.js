import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import SmallNumbers from '../components/SmallNumbers';

describe('My rest basic test', function() {

    const getFirst = (wrapper) => {
        const ninep = wrapper.find('p').first().debug();
        console.log(ninep);
    };
    const getLast = (wrapper) => {
        const ninep = wrapper.find('p').last().debug();
        console.log(ninep);
    };
    fit('renders DataMaven state.eight', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/get-numbers']}>
                <DataMaven />
            </MemoryRouter>
        );
        elfDebug.getAll(wrapper);
        const eightSign = <p className='App-intro'>state.eight: 0</p>;
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.nine', () => {
        const wrapper = shallow(<SmallNumbers/>);
        const nineSign = <p className='App-intro'>state.nine: 0</p>;
        getFirst(wrapper);
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);

    });

    it('renders button click message for nine', () => {
        const wrapper = shallow(<SmallNumbers />);
        const nineSign = <p className='App-intro'>state.nine: 9</p>;
        wrapper.find('button.getNine').simulate('click');
        expect(wrapper.containsMatchingElement(nineSign)).toEqual(true);
    });

    it('renders initial value of paragraph with state.eight', () => {
        const wrapper = shallow(<SmallNumbers />);
        const eightSign = <p className='App-intro'>state.eight: 0</p>;
        const eightp = wrapper.find('p').last().debug();
        console.log(eightp);
        expect(wrapper.containsMatchingElement(eightSign)).toEqual(true);
    });

});
