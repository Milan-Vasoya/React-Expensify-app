import expenseReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';


test('shouls set expense reducer with default value', () => {
    const state = expenseReducer(undefined, '@@INIT');

    expect(state).toEqual([]);
});

// test('should add expense with default value ',()=>{
//     const state = expenseReducer (undefined, {type: 'ADD_EXPENSE',expense:{}});

//     expect(state).toEqual({
//         description : '',
//         note :'',
//         amount : 0,
//         creatAt : 0,
//         id:expect.any(String)
//     });
// });

test('should remove expenses from reducer  actions', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expenses from reducer  actions with invalid ID', () => {

    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-2'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('Add an expense with valid data', () => {
    const expense = {
        id: '4',
        description: 'milan',
        note: 'milan',
        amount: 1500,
        creatAt: 2000,
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense

    }

    const state = expenseReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});



test('EDIT ITEM with an valid id from reducer', () => {

    const id='3';
    const updates = {
        description: 'milan',
        note: 'milan',
        amount: 1500,
        createdAt: 0,
    }

    const action ={
        type:'EDIT_EXPENSE',
        id,
        updates
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual([expenses[0],expenses[1],{id,...updates}]);
});

test('EDIT ITEM with an valid id from reducer', () => {

    const id='-3';
    const updates = {
        description: 'milan',
        note: 'milan',
        amount: 1500,
        createdAt: 0,
    }

    const action ={
        type:'EDIT_EXPENSE',
        id,
        updates
    }
    const state = expenseReducer(expenses, action);

    expect(state).toEqual(expenses);
});
