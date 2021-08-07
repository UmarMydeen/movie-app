import { getByTestId, render, screen } from '@testing-library/react';
import MovieDetails from './MovieDetails';
import movieMock from '../../../__mocks__/movieMock';

let mockProps;

beforeEach(() => {
    mockProps = {
        match: {
            params: {
                id: 'MockId'
            }
        }
    }
})

test('should render component correctly', () => {
    const component = render(<MovieDetails {...mockProps} />);
    expect(component).toMatchSnapshot();
});