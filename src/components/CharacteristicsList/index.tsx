import React from 'react';
import * as S from './styles';

export function CharacteristicsList({ pokemon }: any) {
    return (
        <S.ViewCharacteristic>
            <S.BodyCharacteristics >
                <S.Characteristics>Weight:</S.Characteristics>
                <S.CharacteristicsBox pokemon={pokemon}>{pokemon.weight}kg</S.CharacteristicsBox>
            </S.BodyCharacteristics>
            <S.BodyCharacteristics>
                <S.Characteristics>Height:</S.Characteristics>
                <S.CharacteristicsBox pokemon={pokemon}>{pokemon.height}m</S.CharacteristicsBox>
            </S.BodyCharacteristics>
            <S.BodyCharacteristics pokemon={pokemon}>
                <S.Characteristics>Major Move:</S.Characteristics>
                <S.CharacteristicsBox pokemon={pokemon}>Tackle</S.CharacteristicsBox>
            </S.BodyCharacteristics>
        </S.ViewCharacteristic>
    );
}
