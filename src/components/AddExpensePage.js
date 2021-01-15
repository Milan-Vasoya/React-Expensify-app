
import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/expensify');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-containter">
            <h1 className="header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-containter" >
          <ExpenseForm
            onSubmit={this.onSubmit}
          />

        </div>


      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
