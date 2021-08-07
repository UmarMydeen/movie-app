import { render, screen } from '@testing-library/react';
import { TestableMoviesFilterBar as MoviesFilterBar } from './MoviesFilterBar';
import movieMock from '../../../__mocks__/movieMock';

let mockProps;

beforeEach(() => {
    mockProps = {
        actionFilterMovies: jest.fn(),
        actionSortMovies: jest.fn(),
        movieList: [movieMock],
    }
})

test('should render component correctly', () => {
    const component = render(<MoviesFilterBar {...mockProps} />);
    expect(component).toMatchSnapshot();
});