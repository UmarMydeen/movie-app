import { MOVIE_FILTER, SET_MOVIE_FILTER } from '../Constants/IssueConstants';

const filterMovies = (value, fieldName) => (dispatch, getState) => {
    const { movieList, dataSource } = getState().movies;
    const filterBy = getState().filters.filterBy;
    let filteredData = [];

    let filterCriterias = { ...filterBy };

    if (Object.keys(filterBy).length > 1) {
        Object.keys(filterBy).forEach(
            filter => (filter !== fieldName) && (filterCriterias[fieldName] = value));
    } else {
        filterCriterias[fieldName] = value
    }

    if (value === 0 || value === '' || value === null) {
        delete filterCriterias[fieldName];
    }

    if (filterCriterias) {
        const fieldNames = Object.keys(filterCriterias);
        const values = Object.keys(filterCriterias).map(key => filterCriterias[key]);
        filteredData = movieList.filter(movie => (
            fieldNames.every(
                fieldName => {
                    if (fieldName === 'Title') {
                        return movie[fieldName].toLowerCase().includes(filterCriterias['Title'].toLowerCase());
                    }
                    return values.includes(movie[fieldName])
                }
            )
        ));
    }

    dispatch({
        type: SET_MOVIE_FILTER,
        fields: filterCriterias,
    })

    dispatch({
        type: MOVIE_FILTER,
        dataSource: filteredData,
    })
};

export default filterMovies;