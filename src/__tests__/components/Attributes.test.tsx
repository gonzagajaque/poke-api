import React from 'react';
import { render } from '@testing-library/react-native';
import { AttributesList } from '../../components/AttributesList/';

describe('AttributesList component', () => {
    it('should be able to render AttributesList component', () => {
        const { getByTestId } = render(
            <AttributesList pokemon={{ stats: [{ name: 'hp', base_stat: 100 }] }} />
        );

        expect(getByTestId('AttributesList')).toBeTruthy();
    });
});
