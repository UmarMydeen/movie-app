import { getByTestId, render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import movieMock from '../../../__mocks__/movieMock';
import { BrowserRouter } from 'react-router-dom';

let mockProps;

beforeEach(() => {
    mockProps = {
        movie: movieMock
    }
})

test('should render component correctly', () => {
    const component = render(
        <BrowserRouter>
            <MovieCard {...mockProps} />
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
});