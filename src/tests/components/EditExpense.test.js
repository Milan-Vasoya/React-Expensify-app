import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';

let startEditExpense,startRemoveExpense,history,wrapper;

beforeEach(()=>{
        startEditExpense= jest.fn();
     startRemoveExpense=jest.fn();
     history= {push:jest.fn()};

     wrapper = shallow(<EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history={history}
        expense={expenses[2]}
        />);
});

test('Should render EditExpense Form',()=>{

       expect(wrapper).toMatchSnapshot(); 
});



test('should simulte click event',()=>{
    
        wrapper.find('button').at(0).simulate('click');
        expect(history.push).toHaveBeenLastCalledWith('/expensify');
        expect(startRemoveExpense).toHaveBeenLastCalledWith('3');
});


test('SHOULD HANDLE EDIT EXPENSE SPIES',()=>{
  
 
    wrapper.find('Expenseform').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/expensify');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])

});
