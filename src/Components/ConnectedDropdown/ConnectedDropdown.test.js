import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import ConnectedDropdown from './ConnectedDropdown';
import movieMock from '../../../__mocks__/movieMock';

let mockProps;

beforeEach(() => {
    mockProps = {
        label: 'mockLabel',
        options: [{
            text: 'mockText',
            value: 'mockValue'
        }],
        onSelection: jest.fn()
    }
})

test('should render component correctly', () => {
    const component = render(<ConnectedDropdown {...mockProps} />);
    expect(component).toMatchSnapshot();
});

test('should trigger onSelection method selection', () => {
    const component = render(<ConnectedDropdown {...mockProps} />);
    fireEvent.change(component.getByTestId('connectedDropdown'));
    expect(mockProps.onSelection).toHaveBeenCalled();
});