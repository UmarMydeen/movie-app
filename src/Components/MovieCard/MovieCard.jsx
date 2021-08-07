import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';

const MovieCard = ({
    movie: {
        imdbID,
        Poster: imageUrl,
        Title: title,
    }
}) => {
    return (
        <BrowserRouter>
            <Link to={`/movieDetails/${imdbID}`}>
                <div data-testid={imdbID} className="card m-1" key={imdbID}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            </Link >
        </BrowserRouter>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        imdbID: PropTypes.string.isRequired,
        Poster: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
    })
};

export default MovieCard;