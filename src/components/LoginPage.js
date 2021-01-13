import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin})=>(
    <div>
        <button onClick={startLogin} >login</button>
    </div>
);


const mapDispatchToprops=(dispatch)=>({
    startLogin: ()=> dispatch(startLogin())
});

export default connect(undefined, mapDispatchToprops )(LoginPage);