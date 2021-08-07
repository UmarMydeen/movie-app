import React from 'react';
import PropTypes from 'prop-types';

function MovieDetails(props) {
    return (
        <div>
            <h1>{props.match.params.id}</h1>
        </div>
    );
}

MovieDetails.propTypes = {
    id: PropTypes.string.isRequired
};

export default MovieDetails;