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


 /*  As a serving web developer at XYZ, I am working as a full-time developer, my responsibilities are to work with the team, 
 Sometimes I need communicate with customers and solve their confusion, as well as understating their non-technical perspective and give some suggestions to them.
  I learned a lot such as advanced concepts of Database and security, working with third-party libraries and APIs, 
  and how to reduce and reuse the code in a very efficient manner to build faster, user-friendly, and responsive websites. 
  Life after the mundane 9 to 5 has taught me more than I could ever learn at the job. Interaction with the internet and some of my friends made my hunger for education more,
   I started to take more and more interest in Data Science. 
*/
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