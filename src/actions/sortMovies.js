import { MOVIE_SORT, SET_MOVIE_SORT } from '../Constants/IssueConstants'

const sortMovies = (isAscending) => (dispatch, getState) => {
    const { movieList, dataSource } = getState().movies;

    const sortedData = dataSource.sort(function (a, b) {
        return isAscending ? a.Title.localeCompare(b.Title) : b.Title.localeCompare(a.Title);
    });

    dispatch({
        type: SET_MOVIE_SORT
    })

    dispatch({
        type: MOVIE_SORT,
        dataSource: sortedData
    })
}

export default sortMovies;