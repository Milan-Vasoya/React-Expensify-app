import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth';

export const Header = ({startLogOut}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/dashboard' activeClassName='is-active'  >Go To Home</NavLink>  ||
        <NavLink to='/create' activeClassName='is-active' > Create Page</NavLink> ||    
        {/* <NavLink to='/help' activeClassName='is-active' > Help Page</NavLink> ||   */}
        <button onClick={startLogOut} >Log out</button>
    </header>
);

const mapDispatchToProps= (dispatch)=>({
  startLogOut:()=>dispatch(startLogOut())  
})
export default connect (undefined,mapDispatchToProps) (Header);