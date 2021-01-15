import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
  <header className='header' >
    <div className='content-containter'>
      <div className='header__content'>
        <Link to='/dashboard' className='header__title'><h1>Expensify</h1></Link>
        {/* <Link to='/create' activeClassName='is-active' > Create Page</NavLink> ||     */}
        {/* <NavLink to='/help' activeClassName='is-active' > Help Page</NavLink> ||   */}
        <button onClick={startLogOut} className='button button--link'>Log out</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
})
export default connect(undefined, mapDispatchToProps)(Header);