import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses'

//let onSubmit, history, wrapper;



test('Should render AddExpense page correctly', () => {
    const startAddExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();

    
});

test('should handle on submit', () => {
    const startAddExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
    wrapper.find('Expenseform').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/expensify');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);



});