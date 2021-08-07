import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieFilterBar from '../MoviesFilterBar/MoviesFilterBar';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import { withRouter } from 'react-router';
import getMovieList from '../../actions/fetchMovieList';

const MovieAppContainer = ({
    getMovieList
}) => {
    React.useEffect(() => {
        getMovieList();
    }, [])

    return (
        <div className="container">
            <MovieFilterBar />
            <MoviesGrid />
        </div>
    );
};

MovieAppContainer.propTypes = {
    getMovieList: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieList: () => dispatch(getMovieList())
    }
};

const hocChain = compose(
    withRouter,
    connect(null, mapDispatchToProps),
);

export default hocChain(MovieAppContainer);