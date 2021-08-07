import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieAppContainer from './Components/MovieAppContainer/MovieAppContainer';
import './App.css';
import { Provider } from 'react-redux';
import { initStore } from './Stores/Store';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route path='/' component={MovieAppContainer} exact />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
