import { render, screen } from '@testing-library/react';
import { TestableMoviesGrid as MoviesGrid } from './MoviesGrid';
import movieMock from '../../../__mocks__/movieMock';
import { BrowserRouter } from 'react-router-dom';

let mockProps;

beforeEach(() => {
  mockProps = {
    movieList: [movieMock],
    dataSource: [movieMock]
  }
})

test('should render component correctly', () => {
  const component = render(
    <BrowserRouter>
      <MoviesGrid {...mockProps} />
    </BrowserRouter>
  );
  expect(component).toMatchSnapshot();
});

test('should render no data found when movie list is not present', () => {
  mockProps.movieList = [];
  mockProps.dataSource = [];
  const component = render(
    <BrowserRouter>
      <MoviesGrid {...mockProps} />
    </BrowserRouter>
  );
  expect(component).toMatchSnapshot();
});