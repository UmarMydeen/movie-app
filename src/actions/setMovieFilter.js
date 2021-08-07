import { SET_MOVIE_FILTER, RESET_MOVIE_FILTER } from '../Constants/IssueConstants';

const setMovieFilter = (state = {
    isFilter: false,
    filterBy: {}
}, action) => {
    switch (action.type) {
        case SET_MOVIE_FILTER:
            return {
                ...state,
                isFilter: true,
                filterBy: {
                    ...action.fields
                },
            }
        case RESET_MOVIE_FILTER:
            return {
                ...state,
                isFilter: false,
                filterBy: {},
            }
        default:
            return state;
    }
}

export default setMovieFilter;