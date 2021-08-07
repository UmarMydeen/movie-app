import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { TestableMovieAppContainer as MovieAppContainer } from './MovieAppContainer';
import movieMock from '../../../__mocks__/movieMock';
import rootReducer from '../../Reducers/index';

let mockProps;

const initialState = {
    user: { name: "mock name" },
};

const store = createStore(rootReducer, initialState);

beforeEach(() => {
    mockProps = {
        getMovieList: jest.fn(),
    }
});

test('should render component correctly', () => {
    const component = render(
        <Provider store={store}>
            <MovieAppContainer {...mockProps} />
        </Provider>
    );
    expect(component).toMatchSnapshot();
});