import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/expensify');
    }
    onClick = (e) => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/expensify');

    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-containter">
                        <h1 className="header__title">Edit Expense</h1>
                    </div>
                </div> 
                <div className="content-containter" >
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />

                    <button className='button button--secondary' onClick={this.onClick} > Remove Expense </button>
                </div>
            </div>
        );
    }
}





const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToprops = (dispatch) => {
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(EditExpensePage);