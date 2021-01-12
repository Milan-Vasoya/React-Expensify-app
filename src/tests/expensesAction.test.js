import { addExpense, removeExpense, editExpense, startAddExpense } from '../actions/expenses';
import expenses from './fixture/expenses';
import dataBase from '../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = new configureMockStore([thunk]);

test('should setup remove Expense', () => {
    const action = removeExpense('abc123');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});
test('should setup Edit Expense', () => {
    const action = editExpense('abc123', { description: 'rent' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'rent'
        }
    });
});
test('should setup Add Expense with value', () => {


    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]

    });
});

test('should add expense to dataBase and store', (done) => {

    const store = createMockStore({});

    const expenseData = {
        description: 'mouse',
        amount: 50230,
        note: "buy mouse",
        createdAt: 1610260200000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return dataBase.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });



});

test('should add expense with default value to dataBase and sotr', (done) => {

    const store = createMockStore({});

    const expenseData = {

    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
        });
        return dataBase.ref(`expenses/${action[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual({
           
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        });
    });

    done();
});

// test('should setup Add Expense with Default',()=>{

//     const action = addExpense();

//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//         description:'',
//         note:'',
//         amount:0,
//         createdAt:0,
//         id: expect.any(String)
//         }

//     });
// });


