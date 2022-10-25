import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';
import * as S from './styles';

export function AttributesList({ pokemon }: any) {
    return (
        <>
            {pokemon.stats.map((stat: any) => {
                return (
                    <S.StatusBar key={stat.name}>
                        <S.Attributes>{stat.name
                            .toUpperCase()
                            .charAt(0)
                            .toUpperCase() + stat.name
                                .slice(1).replace('-', ' ')}
                        </S.Attributes>
                        <S.AttributesViewProgress pokemon={pokemon}>
                            <S.AttributesNumber>{stat.base_stat}</S.AttributesNumber>
                            <S.AttributesProgress pokemon={pokemon} style={{
                                width: RFValue(stat.base_stat),
                            }} />
                            <S.AttributesProgress pokemon={pokemon} style={{
                                backgroundColor: theme.colors.background,
                                width: RFValue(100 - stat.base_stat),
                            }} />
                        </S.AttributesViewProgress>
                    </S.StatusBar>
                );
            })}
            <S.StatusBar>
                <S.Attributes>Total:</S.Attributes>
                <S.AttributesViewProgress pokemon={pokemon}>
                    <S.Attributes>{
                        pokemon.stats.reduce((acc: number, stat: any) => acc + stat.base_stat, 0)}
                    </S.Attributes>
                    <S.AttributesProgress pokemon={pokemon} style={{
                        width: RFValue(100),
                    }} />
                </S.AttributesViewProgress>
            </S.StatusBar>
        </>
    );
}
