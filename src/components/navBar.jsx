import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to='/movies'>Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to='/customers'>Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to='/rentals'>Rentals
          </NavLink>
          <NavLink className="nav-item nav-link" to='/login'>Login
          </NavLink>
          <NavLink className="nav-item nav-link" to='/register'>Register</NavLink>
         </div>
      </nav>

      </React.Fragment>
     
  );
  }
}
 
export default NavBar;