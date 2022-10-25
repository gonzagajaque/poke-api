import React from 'react';
import { Type } from '../Type';
import * as S from './styles';

export function Resume({ pokemon }: any) {
    return (
        <S.Body pokemon={pokemon}>
            <S.Shadow />
            <S.PokemonImage source={{ uri: pokemon.image }} />
            <S.BodyResume>
                <S.PokemonID>#{pokemon.number}</S.PokemonID>
                <S.PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name?.slice(1)}</S.PokemonName>
                <Type types={pokemon.types} />
            </S.BodyResume>
        </S.Body>
    );
}