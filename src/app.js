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

const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


