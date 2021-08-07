import { getByTestId, render, screen } from '@testing-library/react';
import { TestableMovieDetails as MovieDetails } from './MovieDetails';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../Reducers/index';
import movieMock from '../../../__mocks__/movieMock';
import { act } from "react-dom/test-utils";

let mockProps;

const initialState = {
    movies: [],
    filters: {},
    sort: {}
};

const store = createStore(rootReducer, initialState);
const mockPromiseResponse = (id) => (new Promise(resolve => (resolve(movieMock))))

beforeEach(() => {
    mockProps = {
        match: {
            params: {
                id: 'MockId'
            }
        },
        actionGetMovideById: mockPromiseResponse
    }
})

test('should render component correctly', () => {
    const component = render(
        <Provider store={store}>
            <MovieDetails {...mockProps} />
        </Provider>
    );
    expect(component).toMatchSnapshot();
});