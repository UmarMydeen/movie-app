import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieAppContainer from './Components/MovieAppContainer/MovieAppContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route path='/' component={MovieAppContainer} exact />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App;
