import styled from 'styled-components/native';
import { Image } from 'react-native';
import { pokemonTypeColor } from '../../utils/constants';
import { Pokemon, PokemonType } from '../../types/pokemon';
import { RFValue } from 'react-native-responsive-fontsize';

type PokemonProps = {
    pokemon: Pokemon;
}

const getColorByPokemonType = (type: PokemonType[]) => {
    return pokemonTypeColor[type[0].name.toLowerCase()];
};

export const Body = styled.View<PokemonProps>`
    height: ${RFValue(120)}px;
    flex-direction: row;
    background-color: ${({ pokemon }) => getColorByPokemonType(pokemon.types)};
    margin: 0 15px;
    margin-top: 20px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`;

export const PokemonImage = styled(Image)`
    width: ${RFValue(103)}px;
    height: ${RFValue(103)}px;
    align-self: flex-start;
    margin-left: 22px;
    margin-top: 14px;
`;

export const BodyResume = styled.View`
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    margin-top: -10px;
`;

export const PokemonID = styled.Text`
    width: ${RFValue(48)}px;
    height: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    text-align: center;
    padding: 2px;
`;

export const Shadow = styled.View`
    position: absolute;
    width: ${RFValue(121)}px;
    height: ${RFValue(121)}px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 60px;
    left: 14px;
    margin-top: 10px;
    opacity: 0.2;
`;

export const PokemonName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${RFValue(22)}px;
    margin-top: 8px;
    align-self: flex-start;
`;
