import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import totalExpenseAmount from '../selectors/expense-Total';
import numeral from 'numeral';



export const ExpenseListHeader =({expensesCount,totalExpenseAmount})=>{
    const totalformattedAmount=numeral( totalExpenseAmount / 100).format('$0,0.00');
    const expenseWord = expensesCount >= 2 ?'expeses': 'expense';
    
    return(
        <div>
           <h1> viewing {expensesCount} {expenseWord} Total amount: {totalformattedAmount} </h1>
        </div>
    );
};

const mapStateToProps =(state)=>{
    const visibleExpenses=selectExpenses(state.expenses,state.filters);
    return{
        expensesCount:visibleExpenses.length,
        totalExpenseAmount:totalExpenseAmount(visibleExpenses)

    };

}

export default connect(mapStateToProps)(ExpenseListHeader);

