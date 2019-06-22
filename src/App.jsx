import React, {
  Component
} from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import Movies from "./components/movies";
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import "./App.css";
import LoginForm from './components/loginForm';




class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <br/>
        <main className="container" >
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/movies/:id' component={MovieForm}/>
            <Route path="/rentals" component={Rentals} />
            <Route path='/movies' component={Movies} />
            <Redirect from='/' exact to='/movies'/>
            <Route path='/customers' component={Customers} />
            <Route path='/not-found' component={NotFound} />
            <Redirect to='/not-found'/>
        </Switch>

        </main>
      </React.Fragment>

    );
  }
}

export default App;