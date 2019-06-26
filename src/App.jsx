import React, {
  Component
} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Movies from "./components/movies";
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

import 'react-toastify/dist/ReactToastify.css'
import "./App.css";


class App extends Component {
  state = {}

  componentDidMount() {
    const jwt = localStorage.setItem("token");
    const user = jwtDecode(jwt);
    this.setState({user})

    
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <br/>
        <main className="container" >
          <Switch>
          <Route path='/movies/new' exact component={MovieForm}/>
            <Route path='/login' component={LoginForm} />
            <Route path='/movies/:id' component={MovieForm}/>
            <Route path="/rentals" component={Rentals} />
            <Route path='/movies' component={Movies} />   
            <Redirect from='/' exact to='/movies'/>
            <Route path='/customers' component={Customers} />
            <Route path='/register' component={RegisterForm}/>
            <Route path='/not-found' component={NotFound} />
            <Redirect to='/not-found'/>
        </Switch>

        </main>
      </React.Fragment>

    );
  }
}

export default App;