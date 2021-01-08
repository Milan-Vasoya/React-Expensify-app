import React from 'react';
import { AddExpensePage } from '../../components/AddExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses'

//let onSubmit, history, wrapper;



test('Should render AddExpense page correctly', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
    expect(wrapper).toMatchSnapshot();

    
});

test('should handle on submit', () => {
    const addExpense = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
    wrapper.find('Expenseform').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);



});