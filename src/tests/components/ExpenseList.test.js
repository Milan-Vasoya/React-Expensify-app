import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses'

test('Should add three item in expense list ' ,()=>{
    const wrapper = new shallow(<ExpenseList expenses={expenses} />);

    expect(wrapper).toMatchSnapshot();
});

test('should add work without passing expenses in expense list page',()=>{
    const wrapper = new shallow(<ExpenseList expenses={[]} />);

    expect(wrapper).toMatchSnapshot();
});