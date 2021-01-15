import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import totalExpenseAmount from '../selectors/expense-Total';
import numeral from 'numeral';



export const ExpenseListHeader = ({ expensesCount, totalExpenseAmount }) => {
    const totalformattedAmount = numeral(totalExpenseAmount / 100).format('$0,0.00');
    const expenseWord = expensesCount >= 2 ? 'expeses' : 'expense';

    return (
        <div className='page-header'>
            <div  className='content-containter' >
                <h1 className='page-header__title'> viewing <span> {expensesCount} </span> {expenseWord} Total amount: <span> {totalformattedAmount} </span> </h1>
                <div className='page-header__actions'>
                    <Link to='/create' className='button' >Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        totalExpenseAmount: totalExpenseAmount(visibleExpenses)

    };

}

export default connect(mapStateToProps)(ExpenseListHeader);

