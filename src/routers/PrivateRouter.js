import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

const PrivateRouter = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (

    <Route {...rest} component={(props) => (

        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
            
        ) : (
                <Redirect to='/expensify' />
            )


    )} />
);


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PrivateRouter);