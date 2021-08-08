import config from '../config';

const getMovideById = (id) => async (dispatch) => {
    let movieList = [];
    const data = await fetch(`${config.baseUrl}/movies/${id}`).then(
        response => response.json()
    );
    return data;
};

export default getMovideById;