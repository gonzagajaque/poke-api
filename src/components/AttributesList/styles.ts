import styled from 'styled-components/native';
import { View } from 'react-native';
import { pokemonTypeColor } from '../../utils/constants';
import { Pokemon, PokemonType } from '../../types/pokemon';
import { RFValue } from 'react-native-responsive-fontsize';

type PokemonProps = {
    pokemon: Pokemon;
}

const getColorByPokemonType = (type: PokemonType[]) => {
    return pokemonTypeColor[type[0].name.toLowerCase()];
};

export const Attributes = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.primary};
    margin-left: 20px;
`;

export const StatusBar = styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const AttributesNumber = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-right: 5px;
    margin-top: -4px;
`;

export const AttributesProgress = styled(View)<PokemonProps>`
    height: ${RFValue(8)}px;
    border-radius: 10px;
    background-color: ${({ pokemon }) => getColorByPokemonType(pokemon.types)};
`;

export const AttributesViewProgress = styled(View)<PokemonProps>`
    flex-direction: row;
    border-radius: 10px;
    margin: 4px 20px;
`;

export const TotalView = styled.View`
    align-items: center;
    margin-top: 20px;
`;