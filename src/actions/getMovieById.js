const getMovideById = (id) => async (dispatch) => {
    let movieList = [];
    const data = await fetch(`http://localhost:8080/movies/${id}`).then(
        response => response.json()
    );
    return data;
};

export default getMovideById;