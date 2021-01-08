import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD expense
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        creatAt = 0
    } = {}
) => ({

    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        creatAt: creatAt
    }
});

//remove expense
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Expense reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return (
                state.filter(({ id }) => id !== action.id
                ));
        case 'EDIT_EXPENSE':
            return (
                state.map((expense) => {
                    if (expense.id == action.id) {
                        return { ...expense, ...action.updates }
                    }
                    else {
                        return expense;
                    }
                })
            );
        default:
            return state;
    }
};


// Filter Functions

//SET TEXT
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text

});

//Sort By Date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//Sort By AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//set start date

const setStartDate = (date = undefined) => ({
    type: 'SET_START_DATE',
    date
});

//set end date
const setEndDate = (date = undefined) => ({
    type: 'SET_END_DATE',
    date
});


//Filtert Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default:
            return state;
    }
};

//Filtering function
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {


    return expenses.filter((expense) => {

        const startDateMatch = typeof startDate !== 'number' || expense.creatAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.creatAt <= startDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy=='date'){
            return a.creatAt<b.creatAt?1:-1;
        }else if(sortBy == 'amount'){
            return a.amount <b.amount?1:-1;
        }
        

    });
};


//create a combine Store
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));
z
store.subscribe(() => {
    const state = store.getState();
   //console.log(state);
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 2500, creatAt: 3000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 1500, creatAt: 2000 }));


// //onsole.log(expenseOne.expense.id);
// store.dispatch(removeExpense(expenseOne.expense.id));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 2000, description:'my coffee' }));
// store.dispatch(setTextFilter('r'));
// store.dispatch(setTextFilter());

    store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// // store.dispatch(setStartDate());
//  store.dispatch(setEndDate(1500));
// // store.dispatch(setEndDate());
const demoState = {
    expenses: [{
        id: 'dasdasd',
        description: 'jan rent',
        note: 'this was final payment',
        amount: 54500,
        creatAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // amount or date
        startDate: undefined,
        endDate: undefined
    }
}



