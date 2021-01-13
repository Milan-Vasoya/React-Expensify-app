
import database from '../firebase/firebase';

//ADD expense
export const addExpense = (expense = {}) => ({

    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        const { description = '',
            note = '',
            amount = 0,
            createdAt = 0 } = expenseData;

        const expense = { description, note, amount, createdAt };
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        }
        )
    }
}

//remove expense
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(
            dispatch(removeExpense(id))
        );
    }
}
//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, expense) => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).set(expense).then(
            dispatch(editExpense(id, expense))
        );
    }
}


//Set expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});



export const startSetExpense = () => {
    return (dispatch, getState) => {
        const uid=getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).once('value').then((refs) => {
            const expenses = [];
            refs.forEach((ref) => {
                expenses.push({
                    id: ref.key,
                    ...ref.val()
                });
            });

            dispatch(setExpenses(expenses));

        });
    }
}