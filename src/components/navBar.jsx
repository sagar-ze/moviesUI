import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Movies from './movies';
class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <React.Fragment>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to='/movies'>Movies
          </NavLink>
          <NavLink className="nav-item nav-link" to='/customers'>Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to='/rentals'>Rentals
          </NavLink>
         </div>
      </nav>

      </React.Fragment>
     
  );
  }
}
 
export default NavBar;