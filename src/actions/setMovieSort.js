import { SET_MOVIE_SORT, RESET_MOVIE_SORT } from '../Constants/IssueConstants';

const setMovieSort = (state = false, action) => {
    switch (action.type) {
        case SET_MOVIE_SORT:
            return true
        case RESET_MOVIE_SORT:
            return false
        default:
            return state;
    }
}

export default setMovieSort;