import styled from 'styled-components/native';
import { TouchableOpacity, Image, Text } from 'react-native';
import { pokemonTypeColor } from '../../utils/constants';
import { Pokemon } from '../../types/pokemon';
import { RFValue } from 'react-native-responsive-fontsize';

interface PokemonProps {
  pokemon: Pokemon;
}

const getColorByPokemonType = (type: Pokemon[]) => {
  return pokemonTypeColor[type[0].name.toLowerCase()];
};

export const Container = styled(TouchableOpacity)<PokemonProps>`
  flex: 1;
  width: ${RFValue(140)}px;
  height: ${RFValue(190)}px;
  background-color: ${({ pokemon }) => getColorByPokemonType(pokemon.types)};
  border-radius: 15px;
  margin-top: 23px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 16px;
`;

export const PokemonImage = styled(Image)`
  width: ${RFValue(93)}px;
  height: ${RFValue(93)}px;
  align-self: center;
`;

export const WrapperCenterID = styled.View`
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const PokemonID = styled.Text`
  width: ${RFValue(50)}px;
  height: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  text-align: center;
`;

export const Shadow = styled.View`
  height: ${RFValue(109)}px;
  width: ${RFValue(109)}px;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.2;
  position: absolute;
  border-radius: 60px;
  margin: 15px;
`;

export const PokemonName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(18)}px;
  align-self: center;
  margin-top: 15px;
`;