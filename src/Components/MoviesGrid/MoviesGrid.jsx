import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import {
    getMovieList,
    getMovieListDataSource,
} from '../../Reducers/index'

const MoviesGrid = ({
    movieList,
    dataSource
}) => {
    return (
        <div className="row row-cols-6 row-cols-md-5">
            {
                dataSource.length === 0 && (<p> No Data Found</p>)
            }
            {
                dataSource && dataSource.map(movie => (<MovieCard movie={movie} />))
            }
        </div>
    );
}

MoviesGrid.propTypes = {
    movieList: PropTypes.array,
    dataSource: PropTypes.array,
};

MoviesGrid.defaultProps = {
    movieList: [],
    dataSource: [],
};

const mapStateToProps = (state) => {
    return {
        movieList: getMovieList(state),
        dataSource: getMovieListDataSource(state),
    }
};

export { MoviesGrid as TestableMoviesGrid };

const hocChain = compose(
    connect(mapStateToProps, null),
);

export default hocChain(MoviesGrid);