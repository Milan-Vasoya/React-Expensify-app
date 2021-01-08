import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses'
import Expenseform from '../../components/ExpenseForm';
import moment from 'moment';

test('should run Expense form with default value', ()=>{
    const wrapper= shallow(<Expenseform />);
    expect(wrapper).toMatchSnapshot();
});

test('should run Expense form with Given value', ()=>{
    const wrapper= shallow(<Expenseform expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should set error value in form', ()=>{
    const wrapper= shallow(<Expenseform />);
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', {
        preventDefault:() =>{}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
    
} );

test('Should test set the description in form',()=>{
    const value="index milan"
    const wrapper= shallow(<Expenseform />);
    
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('description')).toBe(value);

});

test('Should test set the note in form',()=>{
    const value="milan's note"
    const wrapper= shallow(<Expenseform />);
    
    wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('note')).toBe(value);

});

test('Should test set the amount in form',()=>{
    const value="103.22"
    const wrapper= shallow(<Expenseform />);
    
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('amount')).toBe(value);

});

test('Should not set amount in form',()=>{
    const value="103.225"
    const wrapper= shallow(<Expenseform />);
    
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    });

    expect(wrapper.state('amount')).toBe('');

});

test('shoul call onsubmit props for valid submission',()=>{
    const onSubmitSpy=jest.fn();
    const wrapper= shallow(<Expenseform expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', {
        preventDefault:() =>{}
    });

 
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        { 
            description: expenses[0].description,
                amount: expenses[0].amount,
                createdAt:expenses[0].createdAt,
                note:expenses[0].note
        }
    );

});

test('should set new date on date change', ()=>{
    const now=moment();
    const wrapper= shallow(<Expenseform />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus on state', ()=>{
    const focused = true;
    const wrapper= shallow(<Expenseform />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toEqual(focused);
});