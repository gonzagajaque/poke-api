import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Input } from '../../components/Input/';

describe('Input component', () => {
    it('should be able to render Input component', () => {
        const { getByTestId } = render(
            <Input />
        );

        expect(getByTestId('Input')).toBeTruthy();
    });

    it('should be able to render Input component with value', () => {
        const { getByTestId } = render(
            <Input value="test" />
        );

        expect(getByTestId('Input')).toBeTruthy();
    });

    it('should be able to render Input component with value and change value', () => {
        const { getByTestId } = render(
            <Input value="test" />
        );

        const input = getByTestId('Input');

        fireEvent.changeText(input, 'test2');

        expect(input.props.value).toEqual('test2');
    });

    it('should be able to render Input component with value and change value and press button', () => {
        const { getByTestId } = render(
            <Input value="test" />
        );

        const input = getByTestId('Input');
        const button = getByTestId('ButtonSearchGo');

        fireEvent.changeText(input, 'test2');
        fireEvent.press(button);

        expect(input.props.value).toEqual('test2');
    });
});
