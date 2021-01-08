import React from 'react';
import {shallow} from 'enzyme' ;
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses  from '../fixture/expenses';

test('Should run Expense list Item', ()=>{
    const wrapper = shallow(< ExpenseListItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

