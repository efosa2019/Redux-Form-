import React from 'react';
import { shallow } from 'enzyme';
import Countries from './Countries'
import '../setupTest'

let wrapper;
beforeEach(() => {
    wrapper = shallow(<Countries />);
});
describe('<Countries /> rendering', () => {
    it('should render one <option>', () => {
        expect(wrapper.find('option')).toHaveLength(0);
    });
   
});
