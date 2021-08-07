import IssueConstants from './../Constants/IssueConstants';
import setMovieList from '../actions/setMovieList'
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

export default combineReducers({
  movies,
});
