import { MOVIE_LIST, MOVIE_SORT, MOVIE_FILTER } from '../Constants/IssueConstants';

const setMovieList = (state = {
    dataSource: [],
    movieList: [],
}, action) => {
    switch (action.type) {
        case MOVIE_LIST:
            return {
                ...state,
                ...action.payload
            }
        case MOVIE_SORT:
            return {
                ...state,
                dataSource: [...action.dataSource],
            }
        case MOVIE_FILTER:
            return {
                ...state,
                dataSource: [...action.dataSource],
            }
        default:
            return state;
    }
}

export default setMovieList;