import IssueConstants from './../Constants/IssueConstants';
import setMovieList from '../actions/setMovieList';
import setMovieFilter from '../actions/setMovieFilter';
import setMovieSort from '../actions/setMovieSort'
import { combineReducers } from 'redux';

const initState = {
  isFilter: false,
  isSort: false,
  sortBy: [],
  filterBy: [],
  dataSource: [],
  movieList: [],
}

const setlogin = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case IssueConstants.LOGIN:
      return {
        ...state,
        isAuth: action.isAuth
      }
    default:
      return state;
  }
}

export const getMovieList = state => state.movies.movieList;
export const getMovieListDataSource = state => state.movies.dataSource;

const movies = setMovieList;
const filters = setMovieFilter;
const sort = setMovieSort;
const login = setlogin;

export default combineReducers({
  login,
  movies,
  filters,
  sort
});
