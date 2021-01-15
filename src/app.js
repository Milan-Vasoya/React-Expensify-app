import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetExpense } from './actions/expenses';
import { Login,Logout } from './actions/auth';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage'


const store = configureStore();

const jsx = (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);


let hasrendered =false;
const renderApp=()=>{
    if(!hasrendered){           
        ReactDOM.render(jsx, document.getElementById('app'));           
        hasrendered=true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {

        store.dispatch(Login(user.uid));

        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if(history.location.pathname==='/expensify'){
                history.push('/dashboard');
            }
        });

    } else {
        store.dispatch(Logout());
        renderApp();
        history.push('/expensify');
    }
});


