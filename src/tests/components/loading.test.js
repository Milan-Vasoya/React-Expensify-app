import React from 'react';
import {shallow} from 'enzyme';
import  LoadingPage from '../../components/LoadingPage'
import LoadinPage from '../../components/LoadingPage';

test('should render loading page',()=>{
    const wrapper =shallow(<LoadinPage />);
    expect(wrapper).toMatchSnapshot();
})