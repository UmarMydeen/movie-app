import { MOVIE_LIST } from '../Constants/IssueConstants';

const fetchMovieList = () => async (dispatch) => {
    let movieList = [];
    const data = await fetch('http://localhost:8080/movies').then(
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