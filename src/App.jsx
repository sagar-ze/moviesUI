import React, {
  Component
} from 'react';
import { Route, Link,Switch,Redirect } from 'react-router-dom';
import Movies from "./components/movies";
import Customers from './components/customers';
import NotFound from './components/notFound';
import NavBar from './components/navBar'
import Rentals from './components/rentals';
import "./App.css";



class App extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
         <NavBar />
        <main className="container" >
          <Switch>
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