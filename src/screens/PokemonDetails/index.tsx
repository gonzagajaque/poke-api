import React from 'react';
import { AttributesList } from '../../components/AttributesList';
import { CharacteristicsList } from '../../components/CharacteristicsList';
import { Header } from '../../components/Header';
import { Resume } from '../../components/Resume';
import * as S from './styles';

export function PokemonDetails({ route }: any) {
    const { pokemon } = route?.params;
    
    return (
        <S.Container >
            <Header />
            <Resume pokemon={pokemon} />
            <S.BodyDetails>
                <CharacteristicsList pokemon={pokemon} />
                <AttributesList pokemon={pokemon} />
            </S.BodyDetails>
        </S.Container>
    );
}