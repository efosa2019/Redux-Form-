import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import FormCode from './component/Form';
import './setupTest';


let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
});

describe('<App /> rendering', () => {
    it('should render one <h1>', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
it('should render one <FormCode>', () => {
        expect(wrapper.find(FormCode)).toHaveLength(1);
    });
   
});