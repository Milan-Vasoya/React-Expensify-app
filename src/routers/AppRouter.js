import React from 'react';
import {Router,Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRouter from "./PrivateRouter";

export const history = createHistory();

const AppRouter = ()=>(
    <Router history={history} >
        <div>
            <Switch>
                <PrivateRouter path='/dashboard' component={ExpenseDashboardPage} exact={true}  />
                <PrivateRouter path='/create' component={AddExpensePage} />
                <PrivateRouter path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route path='/expensify' component={LoginPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;