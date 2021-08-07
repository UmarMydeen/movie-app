import React from 'react';
import MovieFilterBar from '../MoviesFilterBar/MoviesFilterBar';
import MoviesGrid from '../MoviesGrid/MoviesGrid';

const MovieAppContainer = (props) => {
    return (
        <div className="container">
            <MovieFilterBar />
            <MoviesGrid />
        </div>
    );
};

export default MovieAppContainer;