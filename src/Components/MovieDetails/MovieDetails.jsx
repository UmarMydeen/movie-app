import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getMovideById from '../../actions/getMovieById';

function MovieDetails({
    match: { params: { id } },
    actionGetMovideById
}) {
    const [movie, setMovie] = React.useState({});

    React.useEffect(() => {
        const response = actionGetMovideById(id);
        response.then(data => (setMovie(data)));
    }, [])

    const { Stills, Title, Plot, imdbRating, Poster } = movie;

    return (
        <div className="container">
            <div className="row row-cols-6 row-cols-md-5">
                <div className="col-md-7">
                    <dl className="row">
                        <dt className="col-sm-3">Title</dt>
                        <dd className="col-sm-9" data-testid="titles">{Title}</dd>

                        <dt className="col-sm-3">Rating</dt>
                        <dd className="col-sm-9">{imdbRating}</dd>

                        <dt className="col-sm-3">Plot</dt>
                        <dd className="col-sm-9">{Plot}</dd>
                    </dl>
                </div>
                <div className="col-md-5">
                    <div className="row">
                        <img src={Poster} className="d-block w-50" alt="..." />
                    </div>
                    <div className="row">
                        {
                            Stills && Stills.map(stillPath => (
                                <div className="col-3 m-1">
                                    <img src={stillPath} className="d-block w-100" alt="..." />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </div>
    );
}

MovieDetails.propTypes = {
    match: {
        params: {
            id: PropTypes.string.isRequired
        }
    },
    actionGetMovideById: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionGetMovideById: (id) => dispatch(getMovideById(id))
    }
};

export { MovieDetails as TestableMovieDetails };

const hocChain = compose(
    connect(null, mapDispatchToProps),
);

export default hocChain(MovieDetails);