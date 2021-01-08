import {addExpense,removeExpense,editExpense} from '../actions/expenses';
import expenses from '../selectors/expenses';

test('should setup remove Expense',()=>{
    const action = removeExpense('abc123');
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'abc123'
    });
});
test('should setup Edit Expense',()=>{
    const action = editExpense('abc123',{description:'rent'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'abc123',
        updates:{
            description:'rent'
        }
    });
});
test('should setup Add Expense with value',()=>{

    const expense={
        description:'rent',
        note:'note',
        amount:500,
        createdAt:1000
    }
    const action = addExpense(expense);

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        ...expense,
        id: expect.any(String)
        }
        
    });
});



test('should setup Add Expense with Default',()=>{

    const action = addExpense();

    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
        description:'',
        note:'',
        amount:0,
        createdAt:0,
        id: expect.any(String)
        }
        
    });
});


