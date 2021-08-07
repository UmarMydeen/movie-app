import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import filterMovies from '../../actions/filterMovies';
import sortMovies from '../../actions/sortMovies';
import ConnectedDropDown from '../../Components/ConnectedDropdown/ConnectedDropdown';
import { getMovieList } from '../../Reducers/index'
import { LOCATION, LANGUAGE, TITLE } from '../../Constants/IssueConstants';

const MoviesFilterBar = ({
    actionFilterMovies,
    actionSortMovies,
    movieList,
}) => {
    const [isAscending, setIsAscending] = React.useState(false);
    const locationList = [...new Set(movieList.map(({ Location }) => Location))].map(
        location => ({ value: location, text: location })
    );

    const languageList = [...new Set(movieList.map(({ Language }) => Language))].map(
        language => (
            { value: language, text: language }
        )
    );

    const inputOnchage = (event) => {
        actionFilterMovies(event.target.value, TITLE);
    }

    const onLanguageSelection = (event) => {
        actionFilterMovies(event.target.value, LANGUAGE);
    }

    const onLocationSelection = (event) => {
        actionFilterMovies(event.target.value, LOCATION);
    }

    const sortMoviesList = () => {
        setIsAscending(!isAscending);
        actionSortMovies(isAscending);
    }

    return (
        <div className="row mx-2">
            <div class="col-3">
                <div class="input-group input-group-sm mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">
                            Search By Title
                        </span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        onChange={inputOnchage}
                    />
                </div>
            </div>

            <div class="col-4">
                <ConnectedDropDown
                    label="Location"
                    options={locationList}
                    onSelection={onLocationSelection}
                />
            </div>
            <div class="col-4">
                <ConnectedDropDown
                    label="Language"
                    options={languageList}
                    onSelection={onLanguageSelection}
                />
            </div>
            <div class="col-1">
                <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={sortMoviesList}
                >
                    {
                        !isAscending ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-alpha-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z" />
                                <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    );
}

MoviesFilterBar.propTypes = {
    actionFilterMovies: PropTypes.func.isRequired,
    actionSortMovies: PropTypes.func.isRequired,
    movieList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        movieList: getMovieList(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actionFilterMovies: (value, filterBy) => dispatch(filterMovies(value, filterBy)),
        actionSortMovies: (value) => dispatch(sortMovies(value))
    }
};

export { MoviesFilterBar as TestableMoviesFilterBar };

const hocChain = compose(
    connect(mapStateToProps, mapDispatchToProps),
);

export default hocChain(MoviesFilterBar);