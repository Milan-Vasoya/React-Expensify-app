import React from 'react';
import {shallow} from 'enzyme';
import numeral from 'numeral';
import {ExpenseListHeader} from '../../components/ExpenseSummery';

test('should render correctly with one data', ()=>{
    const wrapper= shallow(<ExpenseListHeader expensesCount={1} totalExpenseAmount={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render correctly with Multiple data', ()=>{
    const wrapper= shallow(<ExpenseListHeader expensesCount={3} totalExpenseAmount={235567} />);
    expect(wrapper).toMatchSnapshot();
});

