import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../components/LoginPage';
import PrivateRouter from "./PrivateRouter";
import PublicRoute from "./PublicRouter";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history} >
        <div>
            <Switch>
                <PublicRoute path='/expensify' component={LoginPage} />
                <PrivateRouter path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRouter path='/create' component={AddExpensePage} />
                <PrivateRouter path='/edit/:id' component={EditExpensePage} />
                <Route path='/help' component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;