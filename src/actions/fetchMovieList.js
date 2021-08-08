import { MOVIE_LIST } from '../Constants/IssueConstants';
import config from '../config';

const fetchMovieList = () => async (dispatch) => {
    let movieList = [];
    const data = await fetch(`${config.baseUrl}/movies`).then(
        response => response.json()
    );

    if (data.length > 0) {
        movieList = data;
    }

    return dispatch({
        type: MOVIE_LIST,
        payload: {
            movieList,
            dataSource: movieList
        },
    })
};

export default fetchMovieList;