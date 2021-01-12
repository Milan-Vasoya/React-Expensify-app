
import database from '../firebase/firebase';

//ADD expense
export const addExpense = (expense={}) => ({

    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return (dispatch) => {
        const { description = '',
        note = '',
        amount = 0,
        createdAt = 0} = expenseData;

        const expense = {description,note,amount,createdAt};
        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }));
        }
        )}
}

//remove expense
export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Set expenses
export const setExpenses =(expenses)=>({
    type:'SET_EXPENSES',
    expenses
});

export const startSetExpense=()=>{
    return(dispatch)=>{
        
     return  database.ref('expenses').once('value').then((refs)=>{
            const expenses=[];
            refs.forEach((ref)=>{
                expenses.push({
                    id:ref.key,
                    ...ref.val()
                });
            });   

            dispatch(setExpenses(expenses));

        });
    }
}