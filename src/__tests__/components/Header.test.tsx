import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../../components/Header/';

describe('Header component', () => {
    it('should be able to render Header component', () => {
        const { getByTestId } = render(
            <Header />
        );

        expect(getByTestId('Header')).toBeTruthy();
    });
});