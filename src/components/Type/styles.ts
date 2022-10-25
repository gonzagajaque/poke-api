import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { PokemonType } from "../../types/pokemon";
import { pokemonTypeColor } from "../../utils/constants";

const getColorByPokemonType = (types: PokemonType[]) => {
    const color = types.map(type => pokemonTypeColor[type.name]);
    return color;
};

export const Container = styled.View`   
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: ${RFValue(4)}px;    
`;

export const PokemonTypeName = styled.Text<PokemonType>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.white};
    text-transform: capitalize;
    background-color: ${({ name }) => getColorByPokemonType([{ name }])} 'rgba(0,0,0,0.1)';
    border-radius: 20px;
    width: ${RFValue(58)}px;
    height: ${RFValue(20)}px;
    padding: 1px;
    text-align: center;
`;
