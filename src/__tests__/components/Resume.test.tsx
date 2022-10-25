import React from 'react';
import { render } from '@testing-library/react-native';
import { Resume } from '../../components/Resume';

const pokemon = {
    id: 'UG9rZW1vbjowMDE=',
    number: '001',
    name: 'bulbasaur',
    image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
    types: ['Grass', 'Poison']
};

describe('Resume', () => {
    it('should render the component', () => {
        const { getByTestId } = render(<Resume pokemon={pokemon} />);

        expect(getByTestId('resume')).toBeTruthy();
    });
});