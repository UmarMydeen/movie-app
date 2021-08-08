import { fireEvent, render, screen } from '@testing-library/react';
import { TestableLoginForm as LoginForm } from './LoginForm';
import movieMock from '../../../__mocks__/movieMock';
import { BrowserRouter } from 'react-router-dom';

let mockProps;

beforeEach(() => {
    mockProps = {
        isAuthenticated: false,
        actionValidateLogin: jest.fn(),
        history: {
            push: jest.fn()
        },
    }
})

test('should load login form on initial render', () => {
    const component = render(<LoginForm {...mockProps} />);
    expect(component).toMatchSnapshot();
});

test('should redirect to dashboard when login successfull', () => {
    mockProps.isAuthenticated = true;
    const component = render(
        <BrowserRouter>
            <LoginForm {...mockProps} />
        </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
});

test('should call actionValidateLogin on form submit', () => {
    const component = render(<LoginForm {...mockProps} />);
    fireEvent.click(component.getByTestId('loginFormBtn'));
    expect(mockProps.actionValidateLogin).toHaveBeenCalled();
});