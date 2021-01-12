import {
    addExpense,
    removeExpense,
    editExpense,
    startAddExpense,
    setExpenses,
    startSetExpense,
    startRemoveExpense,
    startEditExpense
} from '../actions/expenses';
import expenses from './fixture/expenses';
import dataBase from '../firebase/firebase';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { start } from 'live-server';

const createMockStore = new configureMockStore([thunk]);
beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expenseData[id] = { description, amount, note, createdAt }
    });
    dataBase.ref('expenses').set(expenseData).then(() => done());

});

test('should setup remove Expense', () => {
    const action = removeExpense('abc123');
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('should Remove Expense From FireBase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense(id)).then(()=>{
        const action =store.getActions();
        expect(action[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        });
        return dataBase.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy();
        done();
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


test('should Edit Expenses from Firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[1].id;
    const updates={
        description:'milan'
    }
     store.dispatch(startEditExpense(id,updates)).then(()=>{
         const action = store.getActions();
         expect(action[0]).toEqual({
             type:'EDIT_EXPENSE',
             id,
             updates
         });
         done();
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
        done();
    });


});


test('should set up expenses object with value', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });

});

test('should fetch the data from database', (done) => {

    const store = createMockStore({});

    store.dispatch(startSetExpense()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        });
        done();
    }

    );

});

