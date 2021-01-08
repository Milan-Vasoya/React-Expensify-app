import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getvisiablExpenses from './selectors/expenses';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 4000, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 600, createdAt: 1000 }));
store.dispatch(addExpense({ description: '31 of month', createdAt: 1612074600000 }));
store.dispatch(addExpense({ description: '1st of month', createdAt: 1609482600000 }));


// store.dispatch(setTextFilter('bill'));

const state = store.getState();

console.log(getvisiablExpenses(state.expenses, state.filters));

const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

