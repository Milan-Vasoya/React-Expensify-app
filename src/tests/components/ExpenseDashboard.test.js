import React from 'react';
import {shallow} from 'enzyme' ;
import ExpenseDashboard from '../../components/ExpenseDashboardPage';

test('Should add three item in expense list ' ,()=>{
    const wrapper = new shallow(<ExpenseDashboard />);

    expect(wrapper).toMatchSnapshot();
});