import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {  }
  render() { 
    const{user}=this.props
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
            {!user &&
              <React.Fragment>
               <NavLink className="nav-item nav-link" to='/login'>Login
               </NavLink>
               <NavLink className="nav-item nav-link" to='/register'>Register
              </NavLink>    
             </React.Fragment>
            }
            {user &&
              <React.Fragment>
               <NavLink className="nav-item nav-link" to='/profile'>{user.name}
               </NavLink>
               <NavLink className="nav-item nav-link" to='/logout'>Logout
              </NavLink>    
             </React.Fragment>
            }
         </div>
      </nav>

      </React.Fragment>
     
  );
  }
}
 
export default NavBar;