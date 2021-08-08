import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieAppContainer from './Components/MovieAppContainer/MovieAppContainer';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import LoginForm from './Components/LoginForm/LoginForm';
import { Provider } from 'react-redux';
import { initStore } from './Stores/Store';
import PrivateRoute from './PrivateRoute';

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' component={LoginForm} exact />
          <Route path='/login' component={LoginForm} exact />
          <PrivateRoute path='/movies' component={MovieAppContainer} />
          <PrivateRoute path='/movieDetails/:id' component={MovieDetails} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
