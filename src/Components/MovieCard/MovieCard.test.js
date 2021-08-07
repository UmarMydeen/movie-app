import { getByTestId, render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import movieMock from '../../../__mocks__/movieMock';

let mockProps;

beforeEach(() => {
    mockProps = {
        movie: movieMock
    }
})

test('should render component correctly', () => {
    const component = render(<MovieCard {...mockProps} />);
    expect(component).toMatchSnapshot();
});