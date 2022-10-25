import React from 'react';
import { render } from '@testing-library/react-native';
import { CharacteristicsList } from '../../components/CharacteristicsList/';

describe('CharacteristicsList component', () => {
    it('should be able to render CharacteristicsList component', () => {
        const { getByTestId } = render(
            <CharacteristicsList pokemon={{ weight: 100, height: 100 }} />
        );
        
        expect(getByTestId('CharacteristicsList')).toBeTruthy();
    });
});
