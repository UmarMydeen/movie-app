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

export const getMovieList = state => state.movies.movieList;
export const getMovieListDataSource = state => state.movies.dataSource;

const movies = setMovieList;
const filters = setMovieFilter;
const sort = setMovieSort;

export default combineReducers({
  movies,
  filters,
  sort
});
